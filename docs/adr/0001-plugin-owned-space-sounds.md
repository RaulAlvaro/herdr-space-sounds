---
status: accepted
---

# Keep per-Space sounds in the plugin

Herdr's built-in sound files are configured globally, while its per-agent controls only enable or silence a type of agent. This plugin will react to agent status events and play its own macOS sounds by Space. Users will explicitly disable Herdr's built-in sounds to avoid duplicate audio. This keeps the first contribution independent of a core change, at the cost of limiting initial support to a local macOS server and client.

## Considered options

- Changing Herdr's sound configuration and local client playback would preserve its native audio path, but requires a larger core contribution.
- Calling `notification.show` would reuse Herdr's existing sound playback, but its sound choices are limited to the globally configured `done` and `request` files.
