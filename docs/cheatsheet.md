# Open Source Navigator - Cheatsheet

This document provides a quick reference for the most common commands used in this project.

---

## 🚀 Application Scripts

These commands should be run from the **root directory** of the project (`GitHandShake/`).

| Command | Description |
| :--- | :--- |
| `npm install` | Installs dependencies for all workspaces (`client` and `server`). Run this after cloning the project. |
| `npm run client` | Starts the Next.js frontend development server. |
| `npm run server` | Starts the NestJS backend development server. |
| `npm run db:connect`| Connects to the running PostgreSQL database using `psql` inside the Docker container. |

---

## 📦 Database Management (Docker)

These commands manage the PostgreSQL database container and should be run from the **root directory**.

| Command | Description |
| :--- | :--- |
| `docker compose up -d` | Starts the PostgreSQL database container in the background. |
| `docker compose down` | Stops the database container. The data will be preserved. |
| `docker compose down -v` | **(Use with caution!)** Stops the container AND deletes all database data. Useful for a complete reset. |
| `docker compose ps` | Lists the running containers and their status. |
| `docker compose logs db` | Shows the real-time logs for the database container, useful for troubleshooting. |

---

## 🌿 Git Workflow

A quick reminder of the common Git commands for our branching strategy.

| Command | Description |
| :--- | :--- |
| `git status` | Shows the current status of your working branch. |
| `git checkout -b <branch-name>` | Creates and switches to a new feature branch. |
| `git add .` | Stages all new and modified files for a commit. |
| `git commit -m "message"` | Commits the staged files with a descriptive message. |
| `git pull` | Fetches and merges changes from the remote branch into your local branch. (Good to run before `push`). |
| `git push` | Pushes your local commits to the remote branch. |
| `git push -u origin <branch-name>` | Pushes a new branch to the remote repository for the first time and sets it as the upstream branch. |

