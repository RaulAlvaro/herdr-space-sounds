import assert from "node:assert/strict";
import test from "node:test";
import { DEFAULT_CONFIG, assignmentPath, presetFor, shouldPlay, soundFor } from "../src/logic.ts";

test("a worktree inherits its project sound until assigned its own", () => {
  const config = structuredClone(DEFAULT_CONFIG);
  config.projects["/projects/app"] = "2";
  const context = {
    worktree: {
      repo_root: "/projects/app",
      checkout_path: "/projects/app-worktrees/urgent",
    },
  };
  assert.equal(presetFor(context, config), "2");
  assert.equal(assignmentPath(context), "/projects/app-worktrees/urgent");
  config.projects["/projects/app-worktrees/urgent"] = "3";
  assert.equal(presetFor(context, config), "3");
  assert.equal(soundFor(context, "done", config), "/System/Library/Sounds/Submarine.aiff");
});

test("completion sounds only in background; blocked sounds in either Space", () => {
  const workspaces = [
    { workspace_id: "w1", focused: true },
    { workspace_id: "w2", focused: false },
  ];
  assert.equal(shouldPlay("done", "w1", workspaces), false);
  assert.equal(shouldPlay("done", "w2", workspaces), true);
  assert.equal(shouldPlay("blocked", "w1", workspaces), true);
  assert.equal(shouldPlay("blocked", "w2", workspaces), true);
  assert.equal(shouldPlay("working", "w2", workspaces), false);
  assert.equal(shouldPlay("done", "missing", workspaces), false);
});
