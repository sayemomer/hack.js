function convertHTML(str) {
  // &colon;&rpar;
 return str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g,"&apos;");
}

convertHTML("Shindler's List")
