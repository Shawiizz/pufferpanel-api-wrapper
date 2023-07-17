"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToQueryString = void 0;
var objectToQueryString = function (obj) {
    var queryParams = [];
    for (var key in obj)
        if (obj.hasOwnProperty(key) && obj[key] !== undefined)
            queryParams.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key])));
    return queryParams.length > 0 ? "?".concat(queryParams.join('&')) : '';
};
exports.objectToQueryString = objectToQueryString;
