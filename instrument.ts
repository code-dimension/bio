import * as Sentry from "@sentry/node";

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://8e740408ea178c12e68e25b833d9af00@o4509015588864000.ingest.us.sentry.io/4509538714648576",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
