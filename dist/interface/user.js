"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultValues = void 0;
function setDefaultValues(req) {
    return {
        ...req,
        userId: req.userId ?? "",
        skip: req.skip ?? 0,
        limit: req.limit ?? 10,
        search: req.search ?? "",
        sort: req.sort ?? { _id: -1 },
        filter: req.filter ?? [],
        input: req.input ?? "",
    };
}
exports.setDefaultValues = setDefaultValues;
