var assert = require('assert');
var Embark = require('embark-framework');
var EmbarkSpec = Embark.initTests();

describe("Coin", function(done) {
  before(function(done) {
    EmbarkSpec.deployAll(done);
  });

  it("should have initial balance", function(done) {
    var account = "0x43a715ce7713cfe2402d13fbce71e8ad29501e36";

    Coin.transfer(account, 50, function(err, result) {
      Coin.getBalance(account, function(err, result) {        
        assert.equal(result.toNumber(), 50);
        done();
      });
    });
  });

});
