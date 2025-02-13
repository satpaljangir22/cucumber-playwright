// filepath: /Users/satpaljangir/Documents/Cucumber-Playwright/cucumber.js
const common = [
  "features/**/*.feature", // Specify the feature files
  "--require-module ts-node/register", // Load TypeScript module
  "--require features/step_definitions/**/*.ts", // Load step definitions
  "--require features/support/playwright-environment.ts", // Load custom environment
  "--format progress-bar", // Load custom formatter
  "--format json:reports/cucumber_report.json", // Generate JSON report
].join(" ");

export default common;
