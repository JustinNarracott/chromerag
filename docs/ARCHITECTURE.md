# ChromeRAG Architecture

## Core thesis

ChromeRAG explores a simple architectural idea:

> The browser is becoming an AI runtime.

Modern browsers already contain:

- identity
- storage
- sessions
- rendering
- permissions
- local context
- extension APIs
- and now local LLM runtimes

ChromeRAG treats those capabilities as infrastructure for building local-first intelligence layers.

---

## High-level architecture

```text
Sources
  ├─ local files
  ├─ SharePoint sync folders
  ├─ URLs
  ├─ browser pages
  └─ optional Microsoft Graph
        ↓
Extraction / chunking
        ↓
IndexedDB / local storage
        ↓
Retrieval
  ├─ BM25-style ranking
  ├─ evidence filtering
  └─ prompt budgeting
        ↓
Chrome Prompt API
(window.LanguageModel)
        ↓
Gemini Nano local synthesis
        ↓
Cited response
```

---

## Design principles

### Local-first

Inference should happen locally whenever possible.

### Retrieval-heavy

The local model should synthesize retrieved evidence rather than rely on memorized knowledge.

### Optional cloud escalation

Cloud models should be optional, not mandatory.

### Workspace-oriented

Users build persistent local knowledge workspaces.

---

## Why this matters

Most enterprise AI stacks currently require:

- vector databases
- cloud inference
- orchestration layers
- API billing
- complex governance

ChromeRAG explores whether a subset of those workflows can instead run directly inside the browser using locally available models.
