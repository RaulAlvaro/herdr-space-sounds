import path from "node:path";

export type Notice = "done" | "blocked";
export type SoundPair = Record<Notice, string>;
export type Config = {
  defaultPreset: string;
  presets: Record<string, SoundPair>;
  projects: Record<string, string>;
};

export type Worktree = {
  checkout_path?: string;
  repo_root?: string;
};

export type Context = {
  workspace_id?: string | null;
  workspace_cwd?: string | null;
  worktree?: Worktree | null;
};

export type Workspace = {
  workspace_id: string;
  focused: boolean;
};

export const DEFAULT_CONFIG: Config = {
  defaultPreset: "1",
  presets: {
    "1": {
      done: "/System/Library/Sounds/Glass.aiff",
      blocked: "/System/Library/Sounds/Hero.aiff",
    },
    "2": {
      done: "/System/Library/Sounds/Ping.aiff",
      blocked: "/System/Library/Sounds/Blow.aiff",
    },
    "3": {
      done: "/System/Library/Sounds/Submarine.aiff",
      blocked: "/System/Library/Sounds/Sosumi.aiff",
    },
  },
  projects: {},
};

export function normalizedPath(value: string | null | undefined): string | null {
  return value && path.isAbsolute(value) ? path.normalize(value) : null;
}

export function assignmentPath(context: Context): string | null {
  return normalizedPath(context.worktree?.checkout_path ?? context.workspace_cwd);
}

export function presetFor(context: Context, config: Config): string {
  const checkout = normalizedPath(context.worktree?.checkout_path);
  const project = normalizedPath(context.worktree?.repo_root ?? context.workspace_cwd);
  return (
    (checkout && config.projects[checkout]) ||
    (project && config.projects[project]) ||
    config.defaultPreset
  );
}

export function soundFor(
  context: Context,
  notice: Notice,
  config: Config,
): string | null {
  const preset = config.presets[presetFor(context, config)];
  const selected = preset?.[notice];
  return typeof selected === "string" && path.isAbsolute(selected)
    ? selected
    : null;
}

export function shouldPlay(
  notice: string,
  workspaceId: string,
  workspaces: Workspace[],
): notice is Notice {
  if (notice !== "done" && notice !== "blocked") return false;
  const workspace = workspaces.find((item) => item.workspace_id === workspaceId);
  if (!workspace) return false;
  return notice === "blocked" || !workspace.focused;
}
