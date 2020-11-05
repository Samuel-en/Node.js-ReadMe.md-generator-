// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${data.badge}

  ## Description 
  ${data.description}

  ## Table of contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Repository Link](#Repository)
  - [Contact Info](#GitHub) 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licence
  ${data.licence}

  ## Contributors
  ${data.contributing}

  ## Test
  ${data.test}
  
  ## Contact Info:

  Github: [${data.Username}](https://github.com/Samuel-en)
  Email: [${data.Email}] (samiandreas70@gmail.com)
  
  `;
  }

module.exports = generateMarkdown;
