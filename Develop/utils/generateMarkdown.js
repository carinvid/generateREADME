// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(userResponses, userInfo) {
  let tableofContents = `## Table of Contents`;

  if (userResponses.description !== "") {
    tableofContents += `* [Description](#description)`;
  }
  if (userResponses.installation !== "") {
    tableofContents += `* [Installation](#installation)`;
  }
  if (userResponses.usage !== "") {
    tableofContents += `* [Usage](#usage)`;
  }
  if (userResponses.contributing !== "") {
    tableofContents += `* [Contributing](#contributing)`;
  }
  if (userResponses.tests !== "") {
    tableofContents += `* [Tests](#tests)`;
  }

  let draftMarkdown = `#${userResponses.title};

   
  ## Description 
  
  *The What, Why, and How:* 
  
  ${userResponses.description}
  `;

  draftMarkdown += tableofContents;

  draftMarkdown += `* [License](#license)`;

  if (userResponses.installation !== "") {
    draftMarkdown += `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`;
  }
  if (userResponses.usage !== "") {
    draftMarkdown += `
      
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
    draftMarkdown += `
      
      ## Tests
      
      *Tests for application and how to run them:*
      
      ${userResponses.tests}`;
  }

  // License section is required
  draftMarkdown += `
      
      ## License
      
      ${userResponses.license}
      `;

  let draftoDeveloper = `
      ---
      
      ## Questions?
      
         
      For any questions, please contact me with the information below:
     
      GitHub: [@${userInfo.login}](${userInfo.url})
      `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
    draftoDeveloper += `
      Email: ${userInfo.email}
      `;
  }

  // Add developer section to markdown
  draftMarkdown += draftoDeveloper;

  // Return markdown
  return draftMarkdown;
}

module.exports = generateMarkdown;
