"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a deep object given a string. zoo['animal.type']
 * @param {Object} obj
 * @param {string} path
 */
function deepValueGetter(obj, path) {
    if (!obj || !path)
        return obj;
    var current = obj;
    var split = path.split('.');
    if (split.length) {
        for (var i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null)
                return '';
        }
    }
    return current;
}
exports.deepValueGetter = deepValueGetter;
//# sourceMappingURL=deep-getter.js.map