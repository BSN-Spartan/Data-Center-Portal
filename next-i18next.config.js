// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require("path");

const config = {
  debug: process.env.NODE_ENV === "development",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "zh-CN"],
  },
  localePath: resolve("./public/locales"),
};
module.exports = config;
