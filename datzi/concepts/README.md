| ID        | Title                       | Slug                | Summary                                                                                                                   |
| --------- | --------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DATZI-080 | Agent Runtime 🤖            | agent               | Datzi runs a single embedded agent runtime derived from **pi-mono**.                                                      |
| DATZI-081 | Agent Loop (Datzi)          | agent-loop          | An agentic loop is the full “real” run of an agent: intake → context assembly → model inference →.                        |
| DATZI-082 | Agent workspace             | agent-workspace     | The workspace is the agent's home. It is the only working directory used for.                                             |
| DATZI-083 | Gateway architecture        | architecture        | Last updated: 2026-01-22.                                                                                                 |
| DATZI-084 | Context Window & Compaction | compaction          | Every model has a **context window** (max tokens it can see). Long-running chats accumulate messages and tool results;.   |
| DATZI-085 | Context                     | context             | “Context” is **everything Datzi sends to the model for a run**. It is bounded by the model’s **context window** (token.   |
| DATZI-086 | Highlights                  | features            | <Card title="Channels" icon="message-square">.                                                                            |
| DATZI-087 | Memory                      | memory              | Datzi memory is **plain Markdown in the agent workspace**. The files are the.                                             |
| DATZI-088 | Messages                    | messages            | This page ties together how Datzi handles inbound messages, sessions, queueing.                                           |
| DATZI-089 | Multi-Agent Routing         | multi-agent         | Goal: multiple _isolated_ agents (separate workspace + agentDir + sessions), plus multiple channel accounts (e.g. two.    |
| DATZI-090 | OAuth                       | oauth               | Datzi supports “subscription auth” via OAuth for providers that offer it (notably **OpenAI Codex (ChatGPT OAuth)**). For. |
| DATZI-091 | Presence                    | presence            | Datzi “presence” is a lightweight, best‑effort view of:.                                                                  |
| DATZI-092 | Command Queue (2026-01-16)  | queue               | We serialize inbound auto-reply runs (all channels) through a tiny in-process queue to prevent multiple agent runs from.  |
| DATZI-093 | Retry policy                | retry               | Set retry policy per provider in ~/.datzi/datzi.json:.                                                                    |
| DATZI-094 | Session Management          | session             | Datzi treats **one direct-chat session per agent** as primary. Direct chats collapse to agent:<agentId>:<mainKey> (.      |
| DATZI-095 | Session Pruning             | session-pruning     | Session pruning trims **old tool results** from the in-memory context right before each LLM call. It does **not**rewrite. |
| DATZI-096 | Session Tools               | session-tool        | Goal: small, hard-to-misuse tool set so agents can list sessions, fetch history, and send to another session.             |
| DATZI-097 | Streaming + chunking        | streaming           | Datzi has two separate streaming layers:.                                                                                 |
| DATZI-098 | System Prompt               | system-prompt       | Datzi builds a custom system prompt for every agent run. The prompt is **Datzi-owned** and does not use the.              |
| DATZI-099 | Model failover              | model-failover      | Datzi handles failures in two stages:.                                                                                    |
| DATZI-100 | Model providers             | model-providers     | This page covers **LLM/model providers** (not chat channels like WhatsApp/Telegram).                                      |
| DATZI-101 | Models CLI                  | models              | See /concepts/model-failover for auth profile.                                                                            |
| DATZI-102 | Markdown formatting         | markdown-formatting | Datzi formats outbound Markdown by converting it into a shared intermediate.                                              |
| DATZI-103 | Timezones                   | timezone            | Datzi standardizes timestamps so the model sees a **single reference time**.                                              |
| DATZI-104 | Typing indicators           | typing-indicators   | Typing indicators are sent to the chat channel while a run is active. Use.                                                |
| DATZI-105 | Usage tracking              | usage-tracking      | for the **current model provider** when available.                                                                        |
