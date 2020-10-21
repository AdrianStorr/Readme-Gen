// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



  ## Table of Contents
  * [Description](Description)
  * [Usage](Usage)
  * [Installation](Installation)
  * [License](License)
  * [Contributors](contributers)
  * [Test](Test)
  * [Questions](Questions)

  ## Description
  ${data.Description}

  ## Installation Instuctions
  ${data.Installation}

  ## Usage Information
  ${data.Usage}

  ## License
  ${data.License}

  ## Contributers
  ${data.Contribution}

  ## Test
  ${data.Test}

  ## Question
  Contact me:

  Github:[${data.Username}](https://github.com/AdrianStorr)
  
  Email :[${data.Email}](https://github.com/AdrianStorr)
`;}


module.exports = generateMarkdown;
