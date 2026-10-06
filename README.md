# Space Sounds MVP for Herdr

Hear which Herdr Space needs attention without looking at the sidebar. This local macOS experiment assigns one of three sound pairs to a project's folder. A linked worktree inherits its parent project's pair until you assign another pair to that worktree.

Herdr's `done` status marks the end of an agent turn, which may be only one step of a larger task. This plugin plays `done` only for background Spaces. It plays `blocked` when an agent needs input, including in the active Space. It leaves visual notifications to Herdr.

## Requirements

- macOS with `/usr/bin/afplay`
- Herdr 0.9.0 or newer
- Node.js 24.3 or newer (runs the TypeScript source without a build step)

## Try the MVP

1. Link this checkout disabled: `herdr plugin link /absolute/path/to/herdr-setting-spaces-sound --disabled`.
2. Inside Herdr, press the default `Ctrl+B`, then `s`, to open Settings. Turn off sound alerts there before enabling this plugin. Herdr has its own sound toggle, so editing a file is optional. You may keep system toast notifications enabled for native macOS visual notifications.
3. Enable the plugin with `herdr plugin enable space-sounds`. Focus a project Space, then run `herdr plugin action invoke space-sounds.assign-1`. Repeat in two other projects with `space-sounds.assign-2` and `space-sounds.assign-3`.
4. Run `herdr plugin action invoke space-sounds.preview` in each focused Space to hear its `done` and `blocked` sounds. The preview action plays both, regardless of focus.
5. Let agents run in different Spaces. Note whether you can identify the project and decide which to attend without looking at Herdr.

The three preset pairs are:

| Preset | Done | Blocked |
| --- | --- | --- |
| 1 | Glass | Hero |
| 2 | Ping | Blow |
| 3 | Submarine | Sosumi |

Spaces without an assignment use preset 1. Assignment actions write `config.json` inside the directory printed by `herdr plugin config-dir space-sounds`. They use a project's absolute folder path, so closing and reopening a Space preserves its assignment. A linked worktree first looks for its own folder; if none is assigned, it looks for the parent repository's folder. Run an assignment action while focused on a worktree to override it.

If you prefer to edit Herdr's config directly, open `~/.config/herdr/config.toml` and put `enabled = false` inside its `[ui.sound]` section (create that section if absent), then run `herdr server reload-config`. Do not place `enabled` at the top level or inside this plugin's `config.json`. Herdr's `ui.sound.enabled` defaults to `true` when unset.

You can edit `config.json` directly. `projects` maps absolute project or worktree folders to a preset number. `presets` maps a number to absolute paths for `done` and `blocked` sounds. `/usr/bin/afplay` accepts the macOS system AIFF files above and common audio files such as MP3. For example:

```json
{
  "defaultPreset": "1",
  "presets": {
    "1": { "done": "/System/Library/Sounds/Glass.aiff", "blocked": "/System/Library/Sounds/Hero.aiff" },
    "2": { "done": "/Users/me/Sounds/important-done.mp3", "blocked": "/Users/me/Sounds/important-help.mp3" },
    "3": { "done": "/System/Library/Sounds/Submarine.aiff", "blocked": "/System/Library/Sounds/Sosumi.aiff" }
  },
  "projects": {
    "/Users/me/Projects/important": "2"
  }
}
```

The MVP deliberately omits the file picker, keyboard shortcuts, grouped notifications, and playback queue. Those belong to the later version if distinct sounds prove useful. Herdr currently does not add plugin actions to Space right-click menus, so use `herdr plugin action invoke` or bind the actions to keys.

`herdr plugin action invoke` prints machine-readable JSON when an action starts. A response with `"status":"running"` is normal; use `herdr plugin log list --plugin space-sounds` to see whether it completed.

## Check and troubleshoot

Run `npm test` for the project and worktree mapping rules and `npm run check` for TypeScript type checking. After an agent changes status, inspect `herdr plugin log list --plugin space-sounds` for errors. The plugin does not modify your Herdr configuration; disabling its built-in audio is an explicit setup step.

To stop the experiment, run `herdr plugin unlink space-sounds` and restore your previous `[ui.sound]` setting. Unlinking leaves the plugin's configuration directory intact.
