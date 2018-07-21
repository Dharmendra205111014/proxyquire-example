var
  //main = require('../main'),
  expect = require('chai').expect,
  proxyquire = require('proxyquire').noPreserveCache();


  var stubs = {
    './folder1/sub/pub': {
      default: {
        called: function() {
          return 'goodbye';
        }
      },
      '@global': true
    }
  };


  var main = proxyquire('../main', stubs);

  describe("testing full app", function() {
    it("should call all functions", function() {
        var result = main.default.called();
        console.log("Result is => \n", result);
        expect(result).not.to.be.null;
    })
  });