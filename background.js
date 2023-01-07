chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/shorts")) {
        let videoURL = tab.url.split("/");
        let videoId = videoURL[videoURL.length - 1];
        chrome.tabs.update(tabId, {
            "url": "https://www.youtube.com/watch?v=" + videoId
        })
    }
})