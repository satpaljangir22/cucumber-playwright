const fs = require("fs");
const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber_report.json",
  output: "reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Browser: "Chromium",
    Platform: "macOS",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

// Ensure the reports directory exists
if (!fs.existsSync("reports")) {
  fs.mkdirSync("reports");
}

// Generate the HTML report
reporter.generate(options);
