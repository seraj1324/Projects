async function retrieveCurrentStat() {
    return (await chrome.storage.sync.get("currentState")).currentState;
};

chrome.action.onClicked.addListener(function(tab) {
    retrieveCurrentStat().then(function(result) {
        if (result == true) {
            chrome.storage.sync.set({"currentState": false});
        } else {
            chrome.storage.sync.set({"currentState": true});
        };
    });
});