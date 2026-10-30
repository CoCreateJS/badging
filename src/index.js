import Actions from "@cocreate/actions";
import Badging from "./api.js";

async function runAction(action) {
    try {
        switch (action.method) {
            case "setBadge":
                await Badging.setBadge(action.params === undefined ? undefined : action.params);
                break;
            case "clearBadge":
                await Badging.clearBadge();
                break;
            default:
                throw new Error(`Unsupported badging action: ${action.method || "missing method"}.`);
        }
        action.end();
    } catch (error) {
        action.abort(error);
    }
}

Actions.init({ name: "badging", callback: runAction });

export { isSupported, setBadge, clearBadge } from "./api.js";
export default Badging;
