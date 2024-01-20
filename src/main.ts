import dotenv from "dotenv";
dotenv.config();
import setup from "./setup";
import convertImgs from "./convertImgs";

(async () => {
  await setup();
  await convertImgs();
})();
