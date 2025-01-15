async function retrieveCurrentStat() {
    return (await chrome.storage.sync.get("currentState")).currentState;
};

retrieveCurrentStat().then(function(result) {
    if (result == true) {
        const DEL_SELECTOR = 'SPAN';
        const DEL_MAIN = 'nav-robux-amount';

        const mo = new MutationObserver(onMutation);
        
        onMutation([{addedNodes: [document.documentElement]}]);
        observe();
        
        function onMutation(mutations) {
            let stopped;
            for (const {addedNodes} of mutations) {
                for (const n of addedNodes) {
                    if (n.tagName) {
                        if (n.matches(DEL_SELECTOR) && n.id && n.id == DEL_MAIN) {
                            stopped = true;
                            mo.disconnect();
                            n.remove();
                        } else if (n.firstElementChild && n.querySelector(DEL_SELECTOR)) {
                            stopped = true;
                            mo.disconnect();
                            for (const el of n.querySelectorAll(DEL_SELECTOR)) if (el.id && el.id == DEL_MAIN) {el.remove()};
                        }
                    }
                }
            }
            if (stopped) observe();
        }
        
        function observe() {
            mo.observe(document, {
                subtree: true,
                childList: true,
            });
        }
    };
});