# Herdr plugin concepts

Vocabulary for the plugin idea being explored in this repository.

## Language

**Space (workspace)**:
A Herdr workspace that groups tabs and panes for a project or folder. `workspace` is the name used by Herdr's CLI and API; `Space` is the label used in its interface.
_Avoid_: Session, tab

**Agent pane**:
A terminal pane in a Space in which Herdr has detected a coding agent and tracks its status.
_Avoid_: Agent account

**Completion notice**:
An audible notice when an agent pane enters Herdr's `done` state after a turn in a background Space. It does not assert that a larger, multi-step task has ended.
_Avoid_: Task completion

**Attention notice**:
An audible notice when an agent pane enters Herdr's `blocked` state and needs user input, including when its Space is active.
_Avoid_: Completion notice

**Sound profile**:
The pair of sounds used for completion and attention notices in a project Space. A worktree Space inherits its parent project's profile unless it has its own assignment.
_Avoid_: Agent sound

**Worktree sound override**:
A sound profile assigned to one worktree Space instead of its parent project's inherited profile.
_Avoid_: New project profile
