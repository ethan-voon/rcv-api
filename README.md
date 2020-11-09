# rcv-api

This project aims to provide a public web application programming interface (API) on top of which anyone can build elections decided by ranked-choice voting (RCV). To learn more about RCV check out [Ballotpedia](<https://ballotpedia.org/Ranked-choice_voting_(RCV)>).

## Version 1.0

This initial version shall provide the following functionality:

- Election CRUD
  - Elections are public. Anyone with a link, or election token, can vote
  - The election creator is the only one who can modify or delete the election.
- Elector CRUD
  - Electors are the API’s equivalent to a “user”
- Electee CRUD
  - An elector paired with an election
  - There is no limit to the number of electees

## Future Features

Subsequent iterations of the API hope to introduce more robust features. For example:

- Roles & Permissions
  - Election creator is the first Administrator
  - Administrators can assign roles that grant specific permissions
- Groups
  - Object name pending...
  - Elections happen within a group context
    - An elector must belong to the group to vote
- Enhanced profiles
  - Electees can provide specific information
    - e.g. Policy stance, history, etc.

## Architecture

Project implementation aims to be a microservice on the surface and adhere to the [Principle of Separation of Conerns](https://en.wikipedia.org/wiki/Separation_of_concerns) on the back-end. As such, folder hierarchy organizes files into the API layer, services layer, and data layer\*. Loaders exist as middleware between the application and defined API routes. This is done for a few reasons:

- Clarity of purpose.
- Ease of flexibility, maintenance, and reuse; e.g. doesn't become _spaghetti code_.
- Ease of testing; e.g. write _unit_ tests **and** _integration_ tests.

For more info, see [SOLID design principles](https://en.wikipedia.org/wiki/SOLID). Or, check out [this article](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

\*Initial version is sticking to a single data model as opposed to mapping to a different object from layer to layer. May change in the future...

## Implementation

@TODO Decide on database technology. Current top contender is [MySQL](https://www.mysql.com/) with [Sequelize](https://sequelize.org/master/index.html)

@TODO What else does this README need?
