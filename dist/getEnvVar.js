"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getEnvVar(varName) {
    const varVal = process.env[varName];
    if (!varVal)
        throw new Error(`${varName} environment variable not found`);
    return varVal;
}
exports.default = getEnvVar;
