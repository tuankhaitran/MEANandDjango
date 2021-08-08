"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("../models/service");
var handler = function (req, res) {
    var id = req.params.id;
    try {
        service_1.deleteService(id);
    }
    catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
exports.default = handler;
