function isSupported() {
    return typeof navigator.setAppBadge === "function" && typeof navigator.clearAppBadge === "function";
}

async function setBadge(count) {
    if (typeof navigator.setAppBadge !== "function")
        throw new Error("The App Badging API is not supported in this browser.");
    if (count === undefined) await navigator.setAppBadge();
    else await navigator.setAppBadge(Number(count));
}

async function clearBadge() {
    if (typeof navigator.clearAppBadge !== "function")
        throw new Error("The App Badging API is not supported in this browser.");
    await navigator.clearAppBadge();
}

export default { isSupported, setBadge, clearBadge };
