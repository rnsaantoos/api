"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRoute = (0, express_1.Router)();
usersRoute.get('/users', (req, res, next) => {
    const users = [{ userName: 'Renan' }];
    res.status(200).send({ users });
});
exports.default = usersRoute;
