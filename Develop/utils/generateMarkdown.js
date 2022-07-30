// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Boost":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      break;
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
      case "WTFPL":
        return "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)";
        break;
        case "IBM":
          return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
          break;
        
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;