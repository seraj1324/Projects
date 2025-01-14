function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.getElementById(selector)) {
            return resolve(document.getElementById(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.getElementById(selector)) {
                observer.disconnect();
                resolve(document.getElementById(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};

if (document.getElementById('nav-robux-amount') == null) {
    document.addEventListener('DOMContentLoaded', onInit, false);

    function onInit() {
        waitForElm('nav-robux-amount').then((elm) => {
            var element1 = document.getElementById('nav-robux-amount');
            element1.remove();
        });
    };
} else {
    var element1 = document.getElementById('nav-robux-amount');
    element1.remove();
};