var nNumberOfArgs = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var a;
    for (var i = 0; i < args.length; i++) {
        for (var j = i + 1; j < args.length; j++) {
            if (args[i] > args[j]) {
                a = args[i];
                args[i] = args[j];
                args[j] = a;
            }
        }
    }
    console.log(args);
};
nNumberOfArgs(90, 43, 21, 54, 6, 34, 67);
