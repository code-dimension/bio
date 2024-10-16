import { app } from "../../server";
const serverless = require('serverless-http');

export default serverless(app);
