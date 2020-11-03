import express from "express";
import loaders from "./loaders/index";

async function startServer() {
  const app = express();
  const port = 8080; // @TODO make this an environment variable

  await loaders({ expressApp: app });

  app
    .listen(port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server started at http://localhost:${port}`);
    })
    .on("error", (err) => {
      // tslint:disable-next-line:no-console
      console.log(`Server error: ${err}`);
      process.exit(1);
    });
}

startServer();
