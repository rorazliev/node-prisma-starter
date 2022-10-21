# REST API starter

![Language](https://img.shields.io/badge/language-typescript-blue) ![Version](https://img.shields.io/github/package-json/v/rorazliev/node-prisma-starter) ![License](https://img.shields.io/github/license/rorazliev/node-prisma-starter)

A REST API application starter with TypeScript, Node.js, Express.js, and Prisma ORM.

The starter also provides you a configured CI/CD pipeline with Jest, Supertest, Docker, and Github Actions ([see main.yaml](.github/workflows/main.yaml)).

Just create a new project using this template, and you're good to go.

## Requirements

- `Node.js` >=v16.x
- `npm` >=v8.x
- `Docker` (optional)

## Environment Variables

Create a new `.env` file in the root directory of your project with all required environment variables. See [.env.example](.env.example).

For the CI pipeline, set up the environment variables as [encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

## Getting Started

1. Start a new project using `node-prisma-starter` as a template
2. Clone a newly created project with `git clone`
3. `cd` to the project directory
4. Run `npm install` to install all dependencies
5. Run `npm run docker:up` to create and start a container
6. Run `npp run prisma:migrate` to generate a new migration
7. Run `npm run dev` to start the server

## Commands

- `dev` starts a project via `nodemon`
- `build` builds a project
- `start` builds a project and starts it via `node`
- `test` runs Jest
- `link:check` checks the code quality with ESLint
- `link:write` checks and fixes the code with ESLint
- `prettier:check` checks the code quality with Prettier
- `prettier:write` checks and fixes the code with Prettier
- `types:check` checks the code on compiler errors
- `check:all` checks the code quality and types
- `docker:up` creates and starts a new container for PostgreSQL database
- `docker:down` stops and deletes a container
- `prisma:migrate` generates a new database migration
- `prisma:generate` generates types
- `prisma:seed` seeds the database
- `prisma:studio` opens Prisma Studion on `http://localhost:5555`
