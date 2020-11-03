import expressLoader from "./express-loader";

export default async ({ expressApp }: any) => {
  expressApp.get("/", (_req: any, res: any) => {
    res.send(
      "Hello! This is a Ranked Choice Voting API! Documentation coming in the future."
    );
  });

  await expressLoader({ app: expressApp });
};
