| ID        | Title             | Slug      | Summary                                                                                                          |
| --------- | ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| DATZI-040 | `datzi agent`     | agent     | Run an agent turn via the Gateway (use --local for embedded).                                                    |
| DATZI-041 | `datzi agents`    | agents    | Manage isolated agents (workspaces + auth + routing).                                                            |
| DATZI-042 | `datzi approvals` | approvals | Manage exec approvals for the **local host**, **gateway host**, or a **node host**.                              |
| DATZI-043 | `datzi browser`   | browser   | Manage Datzi’s browser control server and run browser actions (tabs, snapshots, screenshots, navigation, clicks. |
| DATZI-044 | `datzi channels`  | channels  | Manage chat channel accounts and their runtime status on the Gateway.                                            |
| DATZI-045 | `datzi configure` | configure | Interactive prompt to set up credentials, devices, and agent defaults.                                           |
| DATZI-046 | `datzi cron`      | cron      | Manage cron jobs for the Gateway scheduler.                                                                      |
| DATZI-047 | `datzi dashboard` | dashboard | Open the Control UI using your current auth.                                                                     |
| DATZI-048 | `datzi directory` | directory | Directory lookups for channels that support it (contacts/peers, groups, and “me”).                               |
| DATZI-049 | `datzi dns`       | dns       | DNS helpers for wide-area discovery (Tailscale + CoreDNS). Currently focused on macOS + Homebrew CoreDNS.        |
| DATZI-050 | `datzi docs`      | docs      | Search the live docs index.                                                                                      |
| DATZI-051 | CLI reference     | index     | This page describes the current CLI behavior. If commands change, update this doc.                               |
| DATZI-052 | `datzi doctor`    | doctor    | Health checks + quick fixes for the gateway and channels.                                                        |
| DATZI-053 | Gateway CLI       | gateway   | The Gateway is Datzi’s WebSocket server (channels, nodes, sessions, hooks).                                      |
| DATZI-054 | `datzi health`    | health    | Fetch health from the running Gateway.                                                                           |
| DATZI-055 | `datzi hooks`     | hooks     | Manage agent hooks (event-driven automations for commands like /new, /reset, and gateway startup).               |
| DATZI-056 | `datzi logs`      | logs      | Tail Gateway file logs over RPC (works in remote mode).                                                          |
| DATZI-057 | `datzi memory`    | memory    | Manage semantic memory indexing and search.                                                                      |
| DATZI-058 | `datzi message`   | message   | Single outbound command for sending messages and channel actions.                                                |
| DATZI-059 | `datzi models`    | models    | Model discovery, scanning, and configuration (default model, fallbacks, auth profiles).                          |
| DATZI-060 | `datzi nodes`     | nodes     | Manage paired nodes (devices) and invoke node capabilities.                                                      |
| DATZI-061 | `datzi onboard`   | onboard   | Interactive onboarding wizard (local or remote Gateway setup).                                                   |
| DATZI-062 | `datzi pairing`   | pairing   | Approve or inspect DM pairing requests (for channels that support pairing).                                      |
| DATZI-063 | `datzi plugins`   | plugins   | Manage Gateway plugins/extensions (loaded in-process).                                                           |
| DATZI-064 | `datzi reset`     | reset     | Reset local config/state (keeps the CLI installed).                                                              |
| DATZI-065 | Sandbox CLI       | sandbox   | Manage Docker-based sandbox containers for isolated agent execution.                                             |
| DATZI-066 | `datzi security`  | security  | Security tools (audit + optional fixes).                                                                         |
| DATZI-067 | `datzi sessions`  | sessions  | List stored conversation sessions.                                                                               |
| DATZI-068 | `datzi setup`     | setup     | Initialize ~/.datzi/datzi.json and the agent workspace.                                                          |
| DATZI-069 | `datzi skills`    | skills    | Inspect skills (bundled + workspace + managed overrides) and see what’s eligible vs missing requirements.        |
| DATZI-070 | `datzi status`    | status    | Diagnostics for channels + sessions.                                                                             |
| DATZI-071 | `datzi system`    | system    | System-level helpers for the Gateway: enqueue system events, control heartbeats.                                 |
| DATZI-072 | `datzi tui`       | tui       | Open the terminal UI connected to the Gateway.                                                                   |
| DATZI-073 | `datzi uninstall` | uninstall | Uninstall the gateway service + local data (CLI remains).                                                        |
| DATZI-074 | `datzi update`    | update    | Safely update Datzi and switch between stable/beta/dev channels.                                                 |
| DATZI-075 | `datzi voicecall` | voicecall | voicecall is a plugin-provided command. It only appears if the voice-call plugin is installed and enabled.       |
