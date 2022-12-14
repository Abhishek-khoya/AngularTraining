var nNumberOfArgs = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sortedArray = args.sort(function (a, b) { return a.length - b.length; });
    console.log(sortedArray);
};
nNumberOfArgs("good", "bad", "lal", "keel", "jai", "ujjain");
