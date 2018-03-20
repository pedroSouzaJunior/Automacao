var angularHomepage = require('./AngularHomepage');
var fs = require('fs');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe('angularjs homepage test',function() {

  it('should greet the named user',function() {
    angularHomepage.get();
    angularHomepage.setName('Pedro Souza Junior');
    expect(angularHomepage.getGreeting()).toEqual('Hello Pedro Souza Junior!');
  });

  it('should take a snapshot',function() {
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'exception.png');
    });
  });
});
