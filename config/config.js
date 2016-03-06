var path = require("path"),
    rootPath = path.normalize(__dirname + "/..");

var rootfunc = function (basename) {
    return path.normalize(rootPath+"/"+basename);
};


var secure = function (value) {
    return { writable: false, configurable: true, value: value };
};

var secure_path=function(basename){
    return secure(rootfunc(basename));
}

var Config = Object.create(null);
Config.prototype = {};
var config = Object.create(Config.prototype, {

    root: secure(rootPath),
 
    port:secure(process.env.PORT || 5080)
});



module.exports = config;