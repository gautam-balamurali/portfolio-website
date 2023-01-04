let copyrightText = document.querySelector("#copyrt-txt");

/**
 * To make the copyright year generic
 */
let getCurrentYear = new Date().getFullYear();
copyrightText.innerText = `© ${getCurrentYear} | all rights reserved`;
