import { IElection } from "../interfaces/election";

export default class ElectionService {
  // @TODO Construct for use with dependency injection, try using typedi
  // constructor() {}

  async getElection(electionId: number): Promise<IElection> {
    // @TODO replace mock data with an actual call to a database service
    const mockElection: IElection = {
      electionId: 0,
      startDate: new Date(),
      endDate: new Date(),
    };

    return mockElection;
  }
}
