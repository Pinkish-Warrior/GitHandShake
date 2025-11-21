# Quick Start Guide: Open Source Navigator

This guide provides the essential steps to get the Open Source Navigator development environment up and running using either Docker or Podman.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (usually included with Node.js)
- [Git](https://git-scm.com/)
- Your preferred container engine:
  - [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - **or** [Podman](https://podman.io/) with `podman-compose` or `podman compose`.

---

## Development Overview

The development environment consists of three main components that must run at the same time:

1\.  **Database Container (PostgreSQL):** Stores all application data. It runs in the background via Docker or Podman.
2\.  **Backend Server (NestJS):** Provides the API for the frontend. You will run this in a terminal.
3\.  **Frontend Client (Next.js):** The user interface you see in the browser. You will run this in a separate terminal.

The following steps will guide you through starting each of these components.

---


## Step 1: Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/GitHandShake.git
cd GitHandShake
```

## Step 2: Install Project Dependencies

This project is a monorepo using npm workspaces. Install all dependencies for both the `client` and `server` from the root directory:

```bash
npm install
```

## Step 3: Start the Database Container

The application requires a PostgreSQL database. Choose the command for your container engine.

### For Docker Users

In the project root, run the following command to start the database in the background:

```bash
docker compose up -d
```

### For Podman Users

First, ensure your Podman machine is running. If it's not, start it:

```bash
podman machine start
```

Then, in the project root, run the following command to start the database:

```bash
podman compose up -d
```

On the first run, this will download the PostgreSQL image and automatically set up the database schema.

## Step 4: Run the Applications

You need to run the backend server and the frontend client in two separate terminal windows.

### Terminal 1: Start the Backend Server

```bash
npm run server
```

The NestJS server will start on `http://localhost:3001`.

### Terminal 2: Start the Frontend Client

```bash
npm run client
```

The Next.js development server will start on `http://localhost:3000`.

You can now open `http://localhost:3000` in your browser to see the application.

## Step 5 (Optional): Connect to the Database

If you need to inspect the database directly, you can use the following commands.

### For Docker users (start database)

```bash
npm run db:connect
```

### For Podman users (start database)

```bash
podman exec -it githandshake-db-1 psql -U user -d open_source_navigator
```

The password for the `user` is `password`, as defined in the configuration files.

## Step 6: Stopping the Environment

When you are finished, you can stop the applications by pressing `Ctrl + C` in their respective terminals.

To stop the database container:

### For Docker users

```bash
docker compose down
```

### For Podman users

```bash
podman compose down
#
# Optionally, stop the Podman machine to free up resources
podman machine stop
```
