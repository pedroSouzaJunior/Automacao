describe('Protactor Demo App',function() {

  var first = element(by.model('first'));
  var second = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));
  beforeEach(function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  function add(a,b) {
    first.sendKeys(a);
    second.sendKeys(b);
    goButton.click();
  }

  it('should have a title',function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two',function() {
    first.sendKeys(1);
    second.sendKeys(2);
    goButton.click();
    expect(latestResult.getText()).toEqual('3');
  });

  it('should read the value from an input',function() {
    first.sendKeys(1);
    expect(first.getAttribute('value')).toEqual('1');
  });

  it('should have a history', function() {
    add(1,2);
    add(3,4);

    expect(history.count()).toEqual(2);
    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain('3 + 4');
  });
});
