const withSass = require("@zeit/next-sass");

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