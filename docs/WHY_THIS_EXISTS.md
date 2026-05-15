# Why ChromeRAG Exists

Most discussions about AI focus on cloud models.

ChromeRAG started from a different observation:

> Chrome quietly deployed a local LLM runtime onto millions of machines.

That raises a more interesting architectural question:

What happens when the browser itself becomes an AI runtime?

Browsers already contain:

- identity
- rendering
- local storage
- sessions
- permissions
- extensions
- synced enterprise access
- user context

Adding a local model changes the software stack.

Instead of:

```text
App → API → cloud model
```

we can increasingly explore:

```text
Browser → retrieval → local model
```

ChromeRAG explores local-first retrieval augmented generation (RAG) using:

- browser-native storage
- local indexing
- local synthesis
- optional Microsoft Graph integration
- Chrome Prompt API / Gemini Nano

The project is intentionally experimental.

The goal is not to build another chatbot.

The goal is to explore whether browsers are evolving into local intelligence layers.
