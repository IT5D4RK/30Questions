// Method 1
var shirtMsg = "JDM4LIFE";
var shirtSize = "large";
function makeShirt() {
    console.log("The shirt is going to be ".concat(shirtSize, " in size and have this message printed on it: ").concat(shirtMsg));
}
makeShirt();
// Method 2
function makeShirt2(shirtSize2, shirtMsg2) {
    console.log("The shirt size is ".concat(shirtSize2, " and it has the following message printed on it: ").concat(shirtMsg2));
}
makeShirt2("medium", "<Programmer/>");
