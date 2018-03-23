var helper = require('./helper');
browser.ignoreSynchronization = true;

describe('Iniciando Curso Protractor',function () {
  it('Should have a corousel', function () {
    var botaoSouUcdb = $('.border-secondary'),
        inputUserName = $('#username');

    browser.get('http://site.ucdb.br/').then(function () {
      expect(botaoSouUcdb.isDisplayed()).toBeTruthy();
      botaoSouUcdb.click();
      expect(inputUserName.isDisplayed()).toBeTruthy();
    });

  });
});
