"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("../models/service");
var handler = function (req, res) {
    var _a = req.body, title = _a.title, description = _a.description, picture = _a.picture, code = _a.code, credit = _a.credit, campus = _a.campus, department = _a.department, _id = _a._id;
    try {
        service_1.updateService(_id, title, description, picture, code, credit, campus, department);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
