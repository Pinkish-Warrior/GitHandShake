# Docker Setup for Database

This document provides instructions on how to set up and manage the PostgreSQL database for the Open Source Navigator project using Docker and `docker-compose`.

## 1. Start the Database

To start the PostgreSQL database, navigate to the root of your `GitHandShake` directory in your terminal and run the following command:

```bash
docker-compose up -d
```

* `up`: This command starts the services defined in your `docker-compose.yml` file.
* `-d`: This option runs the containers in detached mode, meaning they will run in the background.

**Important:** On the first run, Docker will download the `postgres:16-alpine` image (if you don't have it locally) and then start the PostgreSQL container. The `schema.sql` file (located in `./db/schema.sql`) will automatically be executed when the database container starts for the very first time. This means your `users` and `issues` tables will be created automatically.

## 2. Verify Database Status (Optional)

You can check if the database container is running and healthy with the following command:

```bash
docker-compose ps
```

To view the logs of the database service (useful for troubleshooting if the container fails to start):

```bash
docker-compose logs db
```

## 3. Connect to the Database (Optional)

If you have the `psql` command-line client installed locally, you can connect to your running database to inspect its contents:

```bash
psql -h localhost -p 5432 -U user -d open_source_navigator
```

* **Host (`-h`):** `localhost` (since Docker maps the port to your local machine).
* **Port (`-p`):** `5432` (the default PostgreSQL port).
* **User (`-U`):** `user` (as defined in `docker-compose.yml`).
* **Database (`-d`):** `open_source_navigator` (as defined in `docker-compose.yml`).

When prompted for the password, enter `password`.

Once connected, you can run `\dt` (list tables) to confirm that the `users` and `issues` tables have been successfully created.

## 4. Stop the Database

When you are done working, you can stop and remove the database container (but keep the data volume) with:

```bash
docker-compose down
```

To stop and remove the container AND delete the data volume (use with caution, as this deletes all your data):

```bash
docker-compose down -v
```
