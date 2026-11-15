# Automation: No Label — publish approved Instagram post

Create this at [cursor.com/automations/new](https://cursor.com/automations/new).

## Settings

- **Trigger:** Manual / Slack / follow-up message containing `approve` or `publish` (or run on demand after approval)
- **Repository:** `lohi1407/no-label`
- **Tools:** repo edit/commit, **Meta Ads / Instagram MCP** (required for direct post)
- **Name:** `No Label · publish approved Instagram`

## Prompt (paste)

```
You publish approved Instagram posts for No Label.

Read content/instagram/README.md and scan content/instagram/queue/*/brief.md.

Rules:
1. Only publish posts with status: approved (or that the user just approved in this chat with “approve YYYY-MM-DD” / “publish YYYY-MM-DD”).
2. If the user sent revise/skip instructions, update brief.md and do not publish.
3. Prefer Meta/Instagram MCP to publish the feed image + caption. If MCP is unavailable or errors, stop, report the blocker, and leave status as approved — do not invent a successful post.
4. Requirements reminder: Instagram Business/Creator + Facebook Page; working Meta MCP auth.
5. After a confirmed successful publish, set status: published, record instagram_media_id and published_at, move/copy the folder into content/instagram/published/YYYY-MM-DD/, commit, and confirm the live result to the user.
6. Never publish more than one feed post per date unless the user explicitly asks for a carousel/story add-on.
```
