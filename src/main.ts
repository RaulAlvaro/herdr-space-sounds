import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  DEFAULT_CONFIG,
  assignmentPath,
  shouldPlay,
  soundFor,
  type Config,
  type Context,
  type Workspace,
} from "./logic.ts";

function parseJson(value: string | undefined): Record<string, unknown> {
  if (!value) return {};
  try {
    const parsed: unknown = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {};
  } catch {
    return {};
  }
}

function configPath(): string {
  const directory = process.env.HERDR_PLUGIN_CONFIG_DIR ?? path.join(process.cwd(), ".local");
  return path.join(directory, "config.json");
}

function readConfig(): Config {
  const file = configPath();
  if (!existsSync(file)) return structuredClone(DEFAULT_CONFIG);
  const input = parseJson(readFileSync(file, "utf8"));
  return {
    defaultPreset:
      typeof input.defaultPreset === "string" ? input.defaultPreset : DEFAULT_CONFIG.defaultPreset,
    presets:
      input.presets && typeof input.presets === "object"
        ? (input.presets as Config["presets"])
        : structuredClone(DEFAULT_CONFIG.presets),
    projects:
      input.projects && typeof input.projects === "object"
        ? (input.projects as Config["projects"])
        : {},
  };
}

function writeConfig(config: Config): void {
  const file = configPath();
  mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(config, null, 2)}\n`, { mode: 0o600 });
  renameSync(temporary, file);
}

function context(): Context {
  return parseJson(process.env.HERDR_PLUGIN_CONTEXT_JSON) as Context;
}

function workspaces(): Workspace[] {
  const bin = process.env.HERDR_BIN_PATH ?? "herdr";
  const result = spawnSync(bin, ["api", "snapshot"], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`Herdr snapshot failed: ${result.stderr.trim()}`);
  const response = parseJson(result.stdout);
  const payload = (response.result ?? response) as Record<string, unknown>;
  const snapshot = (payload.snapshot ?? payload) as Record<string, unknown>;
  return Array.isArray(snapshot.workspaces) ? (snapshot.workspaces as Workspace[]) : [];
}

function play(file: string): void {
  if (!existsSync(file)) throw new Error(`Sound file does not exist: ${file}`);
  const result = spawnSync("/usr/bin/afplay", [file], { stdio: "ignore" });
  if (result.status !== 0) throw new Error(`afplay failed for ${file}`);
}

function onEvent(): void {
  const event = parseJson(process.env.HERDR_PLUGIN_EVENT_JSON);
  const data = (event.data ?? event) as Record<string, unknown>;
  const notice = data.agent_status;
  const workspaceId = data.workspace_id;
  if ((notice !== "done" && notice !== "blocked") || typeof workspaceId !== "string") return;
  if (!shouldPlay(notice, workspaceId, workspaces())) return;
  const file = soundFor(context(), notice, readConfig());
  if (file) play(file);
}

function assign(preset: string): void {
  const selected = context();
  const projectPath = assignmentPath(selected);
  if (!projectPath) throw new Error("Cannot resolve the selected Space's project folder");
  const config = readConfig();
  if (!config.presets[preset]) throw new Error(`Unknown sound preset: ${preset}`);
  config.projects[projectPath] = preset;
  writeConfig(config);
  process.stdout.write(`Assigned sound ${preset} to ${projectPath}\n`);
}

function preview(): void {
  const selected = context();
  const config = readConfig();
  for (const notice of ["done", "blocked"] as const) {
    const file = soundFor(selected, notice, config);
    if (file) play(file);
  }
}

try {
  const command = process.argv[2];
  if (command === "event") onEvent();
  else if (command === "assign") assign(process.argv[3] ?? "");
  else if (command === "preview") preview();
  else throw new Error(`Unknown command: ${command ?? ""}`);
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
}
