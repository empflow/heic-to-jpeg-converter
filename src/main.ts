import dotenv from "dotenv";
dotenv.config();
import setup from "./setup";
import convertAndSaveImgs from "./convertAndSaveImgs";

(async () => {
  await setup();
  await convertAndSaveImgs();
})();
