# Open Source Navigator - Server Application

This directory contains the NestJS backend application for the Open Source Navigator project.

## Script Explanations

* `prebuild`: Cleans the `dist` directory before a build (often uses `rimraf` for cross-platform compatibility).
* `build`: Compiles the TypeScript NestJS application into JavaScript for production.
* `format`: Formats source code using Prettier.
* `start`: Starts the NestJS application (usually a compiled version).
* `start:dev`: Starts the NestJS application in development mode with file watching and automatic recompilation/reloading.
* `start:debug`: Starts the NestJS application in debug mode, often allowing an IDE debugger to attach.
* `start:prod`: Runs the compiled production build of the application (e.g., `node dist/main`).
* `lint`: Lints the TypeScript code using ESLint.
* `test`, `test:watch`, `test:cov`, `test:debug`, `test:e2e`: Various commands for running unit, integration, and end-to-end tests with different options (watch mode, coverage reports, debugging).
