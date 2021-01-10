import mysql from "mysql";
import { IPerson } from "../interfaces/person";

export default class PeopleService {
	// @TODO Construct for use with dependency injection, try using typedi
	// constructor() {}
	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "password",
		database: "rcv",
	});

	async createPerson(person: IPerson) {
		// @TODO validate that the person's email is not in use
		const sql = `INSERT INTO people (name, email) VALUES ('${person.name}', '${person.email}')`;

		this.con.connect();

		await new Promise((resolve, reject) => {
			this.con.query(sql, (err, result) => {
				return err ? reject(err) : resolve(result.insertId);
			});
		})
			.then((result) => (person.personId = result as number))
			.catch((error) => {
				// tslint:disable-next-line:no-console
				console.log(error);
			});

		this.con.end();

		return person;
	}

	async getPerson(person: IPerson): Promise<IPerson> {
		const sql = `SELECT * FROM people p WHERE p.person-id = ${person.personId};`;

		this.con.connect((connectErr) => {
			if (connectErr) throw connectErr;

			this.con.query(sql, (queryErr, result) => {
				if (queryErr) throw queryErr;

				person = result;
			});
		});

		return person;
	}
}
