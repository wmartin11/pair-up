module.exports = function(config) {
  config.set({
      basePath: "../..",
      browsers: ["Chrome", "ChromeHeadless", "ChromeHeadlessCI"],
      coverageIstanbulReporter: {
        fixWebpackSourcePaths: true,
        reports: ["html", "lcovonly"],
        thresholds: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
      customLaunchers: {
        ChromeHeadless: {
          base: "ChromeHeadless",
          flags: ["--no-sandbox"],
        },
        ChromeHeadlessCI: {
          base: "ChromeHeadless",
          flags: ["--no-sandbox"],
        },
      },
      frameworks: ["jasmine"],
      plugins: [
        "karma-chrome-launcher",
        "karma-typescript",
        "karma-mocha",
        "karma-junit-reporter",
        "karma-mocha-reporter",
      ],
      singleRun: false,

      colors: true,
    },
  )
  ;
};
