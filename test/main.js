var assert = require('chai').assert;
var fs=require("fs");
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


describe('Images', function() {
  describe('#google-maps()', function() {
    it('should be image about googlemaps', function(done) {
      
	  fs.readdir("public/assets/images", function(err, files){
		    if (err) throw err;
			
			      assert.notEqual(-1, files.indexOf("googlemaps.png"), "Files: "+files.toString());
				  done();
		  
	  });
	  
	  
    });
  });
});




console.log("[TEST] Checked")
