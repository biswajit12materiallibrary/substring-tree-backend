"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultValues = void 0;
function setDefaultValues(req) {
    var _a, _b, _c, _d, _e, _f, _g;
    return Object.assign(Object.assign({}, req), { userId: (_a = req.userId) !== null && _a !== void 0 ? _a : "", skip: (_b = req.skip) !== null && _b !== void 0 ? _b : 0, limit: (_c = req.limit) !== null && _c !== void 0 ? _c : 10, search: (_d = req.search) !== null && _d !== void 0 ? _d : "", sort: (_e = req.sort) !== null && _e !== void 0 ? _e : { _id: -1 }, filter: (_f = req.filter) !== null && _f !== void 0 ? _f : [], input: (_g = req.input) !== null && _g !== void 0 ? _g : "" });
}
exports.setDefaultValues = setDefaultValues;
