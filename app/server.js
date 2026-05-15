import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8795;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    name: 'ChromeRAG Enterprise',
    version: '5.1',
    features: [
      'local-rag',
      'workspaces',
      'prompt-api',
      'sharepoint-connector',
      'extension-compatible'
    ]
  });
});

app.post('/api/ping', async (req, res) => {
  res.json({
    ok: true,
    received: req.body || null
  });
});

app.listen(PORT, () => {
  console.log(`ChromeRAG Enterprise listening on http://localhost:${PORT}`);
});
