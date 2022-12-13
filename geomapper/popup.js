let windowObjectReference = null;
function openRequestedTab(url, windowName) {
    if (windowObjectReference === null || windowObjectReference.closed) {
        windowObjectReference = window.open(url, windowName, "width=600,height=600")
    } else {
        windowObjectReference.focus()
    };
}

const link = document.querySelector("a[target='OpenMapPopup']")
link.addEventListener("click", (event) => {
    openRequestedTab(link.href);
    event.preventDefault();
}, false);