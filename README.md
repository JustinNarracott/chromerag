# ChromeRAG

Experimental browser-native local RAG using Chrome's built-in Gemini Nano runtime.

ChromeRAG explores a simple question:

> If Chrome is becoming a local AI runtime, what new local-first software architectures become possible?

This repository contains two experimental builds:

- `app/` - ChromeRAG Connectors, a localhost web app for local files, folders, URLs, workspaces, evidence retrieval, and optional SharePoint / Microsoft Graph connector scaffolding.
- `extension/` - ChromeRAG Sidecar, a Chrome extension side panel that can index pages as you browse and query indexed evidence locally.

## Why this exists

The project started as a practical experiment after reports that Chrome had downloaded a local LLM onto users' machines. Rather than treat that as a curiosity, this repo asks what happens if we use the browser itself as an AI runtime.

The core idea:

```text
browser content + local storage + retrieval + Chrome Prompt API = local-first intelligence layer
```

This is not intended to be production-ready. It is an architectural exploration of browser-native AI, private RAG, and local enterprise knowledge augmentation.

## Current features

- Local folder and file indexing
- URL ingestion
- Workspace-based evidence stores
- BM25-style retrieval
- Chrome `LanguageModel` / Prompt API synthesis
- Prompt context budgeting for Gemini Nano
- Citation-style evidence snippets
- Markdown and styled HTML exports
- Microsoft Graph / SharePoint connector direction
- Chrome extension side panel prototype

## Requirements

- Recent Chrome / Chrome Canary with built-in AI / Prompt API enabled
- Node.js 20+
- Windows/macOS/Linux desktop

The local LLM API must be exposed in the browser:

```js
'LanguageModel' in window
await LanguageModel.availability()
```

## Run the web app

```powershell
cd app
npm install
$env:PORT=8795
npm start
```

Open:

```text
http://localhost:8795
```

## Install the extension

```text
chrome://extensions
→ Developer mode
→ Load unpacked
→ select extension/
```

## Status

Experimental. Expect Chrome Prompt API behaviour, model availability, context limits, and feature flags to change.

## Licence

MIT
