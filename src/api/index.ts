import { Router } from "express";
import election from "./routes/election-routes";
import person from "./routes/person-routes";

export default () => {
	const app = Router();
	election(app);
	person(app);

	return app;
};
