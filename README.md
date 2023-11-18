# My Node App

This is a Node.js application using Express.js, Knex.js, and TypeScript. The application uses ES6 module syntax.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/en/download/).

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/my-node-app.git
```

Go to the project directory:

```bash
cd my-node-app
```

Install the dependencies:

```bash
npm install
```

Run the migrations:

```bash
npx knex migrate:latest
```

Seed the database:

```bash
npx knex seed:run
```

Start the application:

```bash
npm start
```

The application is now running at `http://localhost:3000`.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web application framework
- [Knex.js](http://knexjs.org/) - SQL query builder
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript

## Authors

- **Your Name** - *Initial work* - [YourUsername](https://github.com/yourusername)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.