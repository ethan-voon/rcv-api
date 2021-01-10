import express from "express";
import routes from "../api/index";

export default ({ app }: { app: express.Application }) => {
	// Health checks
	app.get("/status", (_req, res) => {
		res.status(200).end();
	});
	app.head("/status", (_req, res) => {
		res.status(200).end();
	});

	// Load API routes
	app.use(routes());

	// @TODO error handling
};
