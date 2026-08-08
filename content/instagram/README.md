# No Label · Instagram pipeline

Daily create → **you approve** → publish.

## Statuses

| Status | Meaning |
|--------|---------|
| `draft` | Agent created; waiting for your review |
| `approved` | You said yes — ready to publish |
| `published` | Live on Instagram |
| `rejected` | Skip / revise |

Each queued post lives in `queue/YYYY-MM-DD/` with:

- `brief.md` — theme, status, caption, notes
- `post.jpg` — 1080×1080 feed creative
- `story.jpg` — optional 1080×1920 story

Approved posts move to `published/` after go-live.

## Approval (human in the loop)

Cursor Automations cannot pause mid-run for approval. Use this two-step loop instead:

1. **Daily draft** automation creates tomorrow’s (or today’s) post and pings you.
2. You reply **`approve YYYY-MM-DD`** or **`revise YYYY-MM-DD: …`**.
3. **Publish** automation (triggered by your reply / follow-up) posts only `approved` items via Meta/Instagram MCP.

Until Meta MCP works, “publish” means packaging assets for manual upload — see *Blockers* below.

## Themes (rotate)

See `CALENDAR.md`. Prefer real origin photography from `public/images/` and makers from `lib/site.ts`. Never invent fake farm photos as “real.”

## Blockers for direct Instagram posting

1. Instagram account must be **Business or Creator**, linked to a Facebook Page.
2. Connect/fix the **Meta Ads / Instagram MCP** in Cursor (Dashboard → Integrations & MCP). It is currently failing tool discovery.
3. Enable that MCP on the Cursor Automation tools list.

Without (2), the agent can still draft + request approval daily; posting stays manual.
