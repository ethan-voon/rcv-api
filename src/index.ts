import express from "express";
const app = express();
const port = 8080; // default port to listen

app.get("/", (req, res) => {
  res.send("Ranked Choice Voting coming soon!");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
