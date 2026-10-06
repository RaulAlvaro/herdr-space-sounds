---
status: accepted
---

# Inherit project sounds in worktrees

Sound assignments will follow a project's folder so they survive closing and reopening a Space. Worktree Spaces will inherit the parent project's pair of sounds unless their own folder has an override. This avoids configuring every short-lived worktree while allowing an important branch to sound different. Display names and workspace IDs are unsuitable as durable assignment keys because names can change and a recreated workspace receives a new instance.
