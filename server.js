/* eslint-disable @typescript-eslint/no-var-requires */
const { spawn } = require("child_process");
const { PORT } = require("./config");
const ls = spawn(process.platform === "win32" ? "npx.cmd" : "npx", [
  "next",
  "start",
  "-p",
  PORT,
]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`ERROR: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
