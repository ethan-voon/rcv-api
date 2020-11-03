import { Router } from "express";
import election from "./routes/election-routes";

export default () => {
  const app = Router();
  election(app);

  return app;
};
