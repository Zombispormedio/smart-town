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



describe('Bower packages', function() {
  describe('#google-charts version', function() {
    it('should be 1.0.4', function(done) {
      
	  fs.readFile("public/bower_components/google-chart/bower.json", function(err, file){
		    if (err) throw err;
			    var content=file.toString();
          var bower_config=JSON.parse(content);
			      assert.equal("1.0.4", bower_config.version, "Version is: "+bower_config.version);
				  done();
		  
	  });
    });
  });
});




console.log("[TEST] Checked")
