function isSupported() {
    return typeof globalThis.navigator?.setAppBadge === "function" &&
        typeof globalThis.navigator?.clearAppBadge === "function";
}

async function setBadge(count) {
    if (typeof globalThis.navigator?.setAppBadge !== "function")
        throw new Error("The App Badging API is not supported in this browser.");
    if (count === undefined) await globalThis.navigator.setAppBadge();
    else await globalThis.navigator.setAppBadge(Number(count));
}

async function clearBadge() {
    if (typeof globalThis.navigator?.clearAppBadge !== "function")
        throw new Error("The App Badging API is not supported in this browser.");
    await globalThis.navigator.clearAppBadge();
}

export { isSupported, setBadge, clearBadge };
export default { isSupported, setBadge, clearBadge };
