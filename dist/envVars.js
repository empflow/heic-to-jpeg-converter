"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INPUT_IMGS_PATH = exports.OUTPUT_IMGS_PATH = void 0;
const getEnvVar_1 = __importDefault(require("./getEnvVar"));
exports.OUTPUT_IMGS_PATH = (0, getEnvVar_1.default)("OUTPUT_IMGS_PATH");
exports.INPUT_IMGS_PATH = (0, getEnvVar_1.default)("INPUT_IMGS_PATH");
