
function pushUrl(title, url) {

    if ('undefined' !== typeof history.pushState) {
        history.pushState(null, title, url);
    }
    else {
        window.location.assign(url);
    }
}