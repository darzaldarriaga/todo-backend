# todo-backend

## Requirements

1. Node.js (https://nodejs.org/en)
2. PostgreSQL (https://www.postgresql.org/download/)

After installing Node.js and PostgreSQL, open a command prompt of your choice and navigate to the folder where you cloned the repository.
Type the command
```bash
npm install
```
to install the packages necessary to start the backend.

Before launching the project, there are configurations that you need to modify depending on your environment or setup

```bash
taskdb.js - modify according to your PostgreSQL information or login credentials
server.js - PORT and corsOptions.origin should be modified if you have a different setup
package.json - create-db property under scripts if you have different credentials for PostgreSQL
```

Once everything has been setup:
Run the
```bash
npm create-db
```
command to initialize the database. (Note: It will ask for your PostgreSQL password)

When everything is ready, run
```bash
npm run dev
```
and your backend service is ready!
