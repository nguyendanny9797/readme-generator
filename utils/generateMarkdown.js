// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Deployed Application URL
${data.link}

## Screenshot
![alt-text](${data.screenshot})

## Features
${data.features}

## Contributors
${data.contributors}

## Testing
${data.test}
`;
}

module.exports = generateMarkdown;
