import { Router, Request, Response } from "express";
import ElectionService from "../../services/election-service";

const route = Router();

export default (app: Router) => {
  app.use("/election", route);

  route.get("/:electionId", async (req: Request, res: Response) => {
    const electionId: number = +req.params.electionId;
    // @TODO Dependency injection
    const electionService = new ElectionService();
    const result = await electionService.getElection(electionId);

    res.send(result);
  });
};
