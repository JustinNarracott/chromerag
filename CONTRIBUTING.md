# Contributing

ChromeRAG is currently an experimental project, so contributions should focus on clarity, safety, and practical local-first AI patterns.

## Good contribution areas

- Chrome Prompt API compatibility notes
- Better prompt budgeting
- Cleaner retrieval ranking
- UI simplification
- Microsoft Graph connector improvements
- Local file extraction improvements
- Extension usability improvements
- Documentation and demos

## Principles

- Keep local-first behaviour explicit.
- Do not send user documents to cloud services by default.
- Make cloud escalation opt-in only.
- Preserve citations and source traceability.
- Avoid destructive browser automation.
- Treat Chrome Prompt API behaviour as experimental and feature-flagged.

## Development notes

The project currently has two strands:

- `app/` - localhost web app
- `extension/` - Chrome side panel extension

Both are prototypes rather than production packages.
