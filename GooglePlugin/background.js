var state = null

async function retrieveCurrentStat() {
    return (await chrome.storage.sync.get("currentState")).currentState;
};

async function retrieveCurrentTab() {
    return (await chrome.tabs.query({active: true}));
};

if (state == true) {
    retrieveCurrentTab().then(function(result) {
        chrome.tabs.get(result[0].id, function(currTab) {
            if (currTab.url != null) {
                const newURL = new URL(currTab.url);
                if (newURL.host != null && newURL.host == "www.roblox.com") {
                    chrome.scripting.executeScript({
                        target: {tabId: result[0].id, allFrames: true},
                        files: ['Content.js'],
                    });
                };
            };
        });
    });
} else {
    if (state == null) {
        chrome.storage.sync.set({"currentState": true});
        retrieveCurrentTab().then(function(result) {
            chrome.tabs.get(result[0].id, function(currTab) {
                if (currTab.url != null) {
                    const newURL = new URL(currTab.url);
                    if (newURL.host != null && newURL.host == "www.roblox.com") {
                        chrome.scripting.executeScript({
                            target: {tabId: result[0].id, allFrames: true},
                            files: ['Content.js'],
                        });
                    };
                };
            });
        });
    };
};

chrome.action.onClicked.addListener(function(tab) {
    var stateTemp = retrieveCurrentStat().then(function(result) {
        if (result == true) {
            chrome.storage.sync.set({"currentState": false});
        } else {
            chrome.storage.sync.set({"currentState": true});
            if (currTab.url != null) {
                const newURL = new URL(currTab.url);
                if (newURL.host != null && newURL.host == "www.roblox.com") {
                    chrome.scripting.executeScript({
                        target: {tabId: tab.id, allFrames: true},
                        files: ['Content.js'],
                    });
                };
            };
        };
    });
});

chrome.tabs.onUpdated.addListener(function(tabId1, changeInfo, tab) {
    retrieveCurrentStat().then(function(result) {
        if (result == true) {
            chrome.tabs.get(tabId1, function(currTab) {
                if (currTab.url != null) {
                    const newURL = new URL(currTab.url);
                    if (newURL.host != null && newURL.host == "www.roblox.com") {
                        chrome.scripting.executeScript({
                            target: {tabId: tabId1, allFrames: true},
                            files: ['Content.js'],
                        });
                    };
                };
            });
        };
    });
});

//chrome.tabs.onCreated.addListener(function(tab) {  
    //retrieveCurrentStat().then(function(result) {
        //if (result == true) {
            //chrome.scripting.executeScript({
                //target: {tabId: tab.id, allFrames: true},
                //files: ['Content.js'],
            //});
        //};
    //});       
//});

chrome.tabs.onActivated.addListener(function(tabId1, changeInfo, tab) {
    retrieveCurrentStat().then(function(result) {
        if (result == true) {
            chrome.tabs.get(tabId1.tabId, function(currTab) {
                if (currTab.url != null) {
                    const newURL = new URL(currTab.url);
                    if (newURL.host != null && newURL.host == "www.roblox.com") {
                        chrome.scripting.executeScript({
                            target: {tabId: tabId1.tabId, allFrames: true},
                            files: ['Content.js'],
                        });
                    };
                };
            });
        };
    });
 });