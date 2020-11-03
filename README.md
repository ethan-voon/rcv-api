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

## Implementation Details

@TODO
