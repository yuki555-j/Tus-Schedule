const withSass = require("@zeit/next-sass");
const withPWA = require("next-pwa");

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["absolute/path/a", "absolute/path/b"],
  },
});

module.exports = {
  distDir: "../.next",
  env: {
    API_URL: "https://tus-schedule-api.herokuapp.com",
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});
