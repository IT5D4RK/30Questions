// Question 2
const name2 = "Moosa"

console.log(`Hello ${name2.toLowerCase()}, would you like to learn some Python today?`);
console.log(`Hello ${name2.toUpperCase()}, would you like to learn some Python today?`);
console.log(`Hello ${toTitleCase(name2)}, would you like to learn some Python today?`);

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}