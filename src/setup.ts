import { mkdir } from "./fsPromisified";
import getEnvVar from "./getEnvVar";
import { rimraf } from "rimraf";

const OUTPUT_IMGS_PATH = getEnvVar("OUTPUT_IMGS_PATH");

export default async function setup() {
  await rimraf(OUTPUT_IMGS_PATH);
  await mkdir(OUTPUT_IMGS_PATH);
}
