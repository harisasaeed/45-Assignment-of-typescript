//Task 44
function sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwich ");
sandwitch('capsicum', 'tomato', 'chicken');
sandwitch('beef', 'cheese');
sandwitch('garlic chicken', 'mayo sauce');
