"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fsPromisified_1 = require("./fsPromisified");
const path_1 = __importDefault(require("path"));
const heic_convert_1 = __importDefault(require("heic-convert"));
const envVars_1 = require("./envVars");
const getOutputImgPath_1 = __importDefault(require("./getOutputImgPath"));
function convertImgs() {
    return __awaiter(this, void 0, void 0, function* () {
        const initImgsFilenames = yield (0, fsPromisified_1.readdir)(envVars_1.INPUT_IMGS_PATH);
        for (let i = 0, n = initImgsFilenames.length; i < n; i++) {
            const inputImgPath = path_1.default.join(envVars_1.INPUT_IMGS_PATH, initImgsFilenames[i]);
            if (path_1.default.extname(inputImgPath) !== ".heic")
                continue;
            const outputImgPath = (0, getOutputImgPath_1.default)(inputImgPath);
            const inputImgBuffer = yield (0, fsPromisified_1.readFile)(inputImgPath);
            console.time("timer");
            const outputBuffer = yield (0, heic_convert_1.default)({
                buffer: inputImgBuffer,
                format: "JPEG",
                quality: 1,
            });
            console.timeEnd("timer");
            yield (0, fsPromisified_1.writeFile)(outputImgPath, Buffer.from(outputBuffer));
        }
    });
}
exports.default = convertImgs;
