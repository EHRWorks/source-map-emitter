var fs = require("fs");
var path = require("path");

module.exports = function SourceMapEmitter(input, sourceMap){
    var filename = path.basename(this.resourcePath);
    sourceMap.sources = sourceMap.sources.map(function(filePath) {
        return path.basename(filePath);
    });
    fs.writeFileSync(path.join(__dirname, filename + ".map"), JSON.stringify(sourceMap));
    fs.unlinkSync(this.resourcePath + ".generated.js");
    return input + "\n//@ sourceMappingURL=" + filename + ".map";
};
