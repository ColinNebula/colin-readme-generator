function renderLicenseBadge(license) {
    console.log('License', license);
    switch (license) {
      case "MIT":
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      
      case "GPLv3":
        return "[![License: GPL]((https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  
        case "Apache 2.0":
          return "[License: Apache](https://img.shields.io/badge/license-Apache%202.0-blue)";
      default:
        return "";
    }
  }
  // N/A License
  function renderLicenseLink(license) {
    if (license !== "no license") {
      return `[${license}](LICENSE)`;
    }
    return "";
  }



module.exports.renderLicenseLink = renderLicenseLink;
module.exports.renderLicenseBadge = renderLicenseBadge;