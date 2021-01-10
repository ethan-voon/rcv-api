import express, { Router, Request, Response } from "express";
import { IPerson } from "../../interfaces/person";
import PeopleService from "../../services/people-service";

const route = Router();

export default (app: Router) => {
	app.use(express.json());
	app.use("/person", route);

	route.post("/", async (req: Request, res: Response) => {
		const person: IPerson = req.body;
		// tslint:disable-next-line:no-console
		console.log(`Request received: ${person}`);
		// @TODO Dependency injection
		const peopleService = new PeopleService();
		const result = await peopleService.createPerson(person);

		res.send(result);
	});

	route.get("/:personId", async (req: Request, res: Response) => {
		const personId: number = +req.params.personId;
		// @TODO Dependency injection
		const peopleService = new PeopleService();
		const result = await peopleService.getPerson({ personId });

		res.send(result);
	});
};
