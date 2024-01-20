import { promisify as p } from "util";
import fs from "fs";

export const readdir = p(fs.readdir);
export const mkdir = p(fs.mkdir);
export const rm = p(fs.rm);
export const writeFile = p(fs.writeFile);
export const readFile = p(fs.readFile);
