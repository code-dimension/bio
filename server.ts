require("dotenv").config();

import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine } from "@angular/ssr";
import express, { Router } from "express";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import bootstrap from "./src/main.server";
import { api } from "./server-api";

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, "../browser");
  const indexHtml = join(serverDistFolder, "index.server.html");

  const commonEngine = new CommonEngine();

  server.set("view engine", "html");
  server.set("views", browserDistFolder);

  server.use("/api", api);

  // Serve static files from /browser
  server.get(
    "**",
    express.static(browserDistFolder, {
      maxAge: "1y",
      index: "index.html",
    })
  );

  // All regular routes use the Angular engine
  server.get("**", (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const hostname =
    process.env["NODE_ENV"] === "production" ? "0.0.0.0" : "localhost";
  const port = process.env["PORT"] || 3000;

  // Start up the Node server
  const server = app();
  server.listen(Number(port), hostname, () => {
    console.log(`Node Express server listening on http://${hostname}:${port}`);
  });
}

run();
