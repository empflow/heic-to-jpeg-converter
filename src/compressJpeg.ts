import sharp from "sharp";

export default function compressJpeg(buffer: Buffer | ArrayBuffer) {
  return sharp(buffer).jpeg().toBuffer();
}
