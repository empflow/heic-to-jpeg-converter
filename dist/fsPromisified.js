"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.writeFile = exports.rm = exports.mkdir = exports.readdir = void 0;
const util_1 = require("util");
const fs_1 = __importDefault(require("fs"));
exports.readdir = (0, util_1.promisify)(fs_1.default.readdir);
exports.mkdir = (0, util_1.promisify)(fs_1.default.mkdir);
exports.rm = (0, util_1.promisify)(fs_1.default.rm);
exports.writeFile = (0, util_1.promisify)(fs_1.default.writeFile);
exports.readFile = (0, util_1.promisify)(fs_1.default.readFile);
