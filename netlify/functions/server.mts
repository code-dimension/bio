const serverMjs = require("../../dist/bio/server/server.mjs");
const serverless = require('serverless-http');

export const handler = serverless(serverMjs.app());
