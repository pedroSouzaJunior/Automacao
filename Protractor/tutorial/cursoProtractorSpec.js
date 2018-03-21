var helper = require('./helper');
browser.ignoreSynchronization = true;

describe('Iniciando Curso Protractor',function () {
  it('Should have a corousel', function () {
    browser.get('http://site.ucdb.br/');
    helper.verifyElementPresentById('carousel');
  });
});
