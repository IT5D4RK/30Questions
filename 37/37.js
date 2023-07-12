function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love JDM"; }
    console.log("The shirt size is ".concat(size, " and it has the following message printed on it: ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "<Programmer/>");
