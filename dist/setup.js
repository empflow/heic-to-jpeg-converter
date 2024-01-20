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
const getEnvVar_1 = __importDefault(require("./getEnvVar"));
const rimraf_1 = require("rimraf");
const OUTPUT_IMGS_PATH = (0, getEnvVar_1.default)("OUTPUT_IMGS_PATH");
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, rimraf_1.rimraf)(OUTPUT_IMGS_PATH);
        yield (0, fsPromisified_1.mkdir)(OUTPUT_IMGS_PATH);
    });
}
exports.default = setup;
