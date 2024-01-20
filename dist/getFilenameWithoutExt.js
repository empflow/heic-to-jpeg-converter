"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function getFilenameWithoutExt(filePath) {
    const originalName = path_1.default.basename(filePath);
    const ext = path_1.default.extname(filePath);
    return originalName.replace(ext, "");
}
exports.default = getFilenameWithoutExt;
