import path from "path";
import { OUTPUT_IMGS_PATH } from "./envVars";
import getFilenameWithoutExt from "./getFilenameWithoutExt";

export default function getOutputImgPath(inputImgPath: string) {
  return path.join(
    OUTPUT_IMGS_PATH,
    `${getFilenameWithoutExt(path.basename(inputImgPath))}.jpeg`
  );
}
