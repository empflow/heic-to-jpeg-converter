import { readFile, readdir, writeFile } from "./fsPromisified";
import path from "path";
import heicConvert from "heic-convert";
import { INPUT_IMGS_PATH } from "./envVars";
import compressJpeg from "./compressJpeg";
import getOutputImgPath from "./getOutputImgPath";

export default async function convertAndSaveImgs() {
  const initImgsFilenames = await readdir(INPUT_IMGS_PATH);

  for (let i = 0, n = initImgsFilenames.length; i < n; i++) {
    const inputImgPath = path.join(INPUT_IMGS_PATH, initImgsFilenames[i]);
    if (path.extname(inputImgPath) !== ".heic") continue;

    const inputImgBuffer = await readFile(inputImgPath);

    const outputBuffer = await heicConvert({
      buffer: inputImgBuffer,
      format: "JPEG",
      quality: 1,
    });

    const compressedOutputBuffer = await compressJpeg(outputBuffer);
    const outputImgPath = getOutputImgPath(inputImgPath);
    await writeFile(outputImgPath, compressedOutputBuffer);
  }
}
