'use strict';

var pub = require('./sub/pub');

var called = function() {
    return "bar is calling => "+ pub.default.called();
}

exports.default = {
    called: called
}