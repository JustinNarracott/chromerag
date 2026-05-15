chrome.runtime.onInstalled.addListener(() => {
  console.log('ChromeRAG Sidecar installed');
});

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((err) => console.error(err));
