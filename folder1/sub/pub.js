'use strict';

var called = function() {
    return "Original Pub is called ";
}

exports.default =  {
    called: called
}