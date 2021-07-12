// TODO: Create a function that returns a license badge based on which license is passed in

function generateMarkdown(userResponses, userInfo) {
  let tableOfContents = `## Table of Contents`;

  if (userResponses.installation !== "") {
    tableOfContents += `
  * [Installation](#installation)`;
  }

  if (userResponses.usage !== "") {
    tableOfContents += `
  * [Usage](#usage)`;
  }

  if (userResponses.contributing !== "") {
    tableOfContents += `
  * [Contributing](#contributing)`;
  }

  if (userResponses.tests !== "") {
    tableOfContents += `
  * [Tests](#tests)`;
  }

  // Generate markdown for the top required portions of the README
  let draftoMarkdown = `# ${userResponses.title}

  [![License](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}
  `;

  // Add Table of Contents to markdown
  draftoMarkdown += tableOfContents;

  // Add License section since License is required to Table of Contents
  draftoMarkdown += `
  * [License](#license)`;

  // Optional Installation section
  if (userResponses.installation !== "") {
    draftoMarkdown += `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`;
  }

  // Optional Usage section
  if (userResponses.usage !== "") {
    draftoMarkdown += `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`;
  }

  // Optional Contributing section
  if (userResponses.contributing !== "") {
    `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`;
  }

  // Optional Tests section
  if (userResponses.tests !== "") {
    draftoMarkdown += `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`;
  }

  // License section is required
  draftoMarkdown += `
  
  ## License
  
  ${userResponses.license}
  `;

  // Questions / About Developer section
  let draftDev = `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
 
  `;

  // If GitHub email is not null, add to Developer section
  if (userResponses.email !== null) {
    draftDev += `
    
    Email: ${userResponses.email}`;
  }

  // Add developer section to markdown
  draftoMarkdown += draftDev;

  // Return markdown
  return draftoMarkdown;
}

module.exports = generateMarkdown;
