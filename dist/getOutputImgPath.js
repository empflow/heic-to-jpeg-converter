"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const envVars_1 = require("./envVars");
const getFilenameWithoutExt_1 = __importDefault(require("./getFilenameWithoutExt"));
function getOutputImgPath(inputImgPath) {
    return path_1.default.join(envVars_1.OUTPUT_IMGS_PATH, `${(0, getFilenameWithoutExt_1.default)(path_1.default.basename(inputImgPath))}.jpeg`);
}
exports.default = getOutputImgPath;
