var
  //main = require('../main'),
  expect = require('chai').expect,
  proxyquire = require('proxyquire').noPreserveCache();


  var stubs = {
    './folder1/sub/pub': {
      called: function() {
        return 'goodbye';
      },
      '@runtimeGlobal': true
    }
  };


  var main = proxyquire('../main', stubs);

  describe("testing full app", function() {
    it("should call all functions", function() {
        var result = main.default.called();
        console.log("Result is => ", result);
        expect(result).not.to.be.null;
    })
  });