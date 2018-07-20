'use strict';

var foo = require('./folder1/foo');
var bar = require('./folder2/bar');


exports.default = {
    called: function() {
        // console.log("So finally => "+ foo.default.called());
        // console.log("So finally => "+ bar.default.called());
        return "So finally => "+ foo.default.called() + "\n" + "So finally => "+ bar.default.called();
    }
}