// require("dotenv").config();

// const path = require("path");
// const Dotenv = require("dotenv-webpack");

module.exports = {
  images: {
    domains: [
      "storage.googleapis.com",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "imgbb.com"
    ],
  },
  // webpack: (config) => {
  //   config.plugins = config.plugins || [];

  //   config.plugins = [
  //     ...config.plugins,

  //     // Read the .env file
  //     new Dotenv({
  //       path: path.join(__dirname, ".env"),
  //       systemvars: true,
  //     }),
  //   ];

  //   return config;
  // },
};
