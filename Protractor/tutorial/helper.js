module.exports = {
  verifyElementPresentById : function(id) {
    browser.ignoreSynchronization = true;
    var elemento = $('#'+id);
    expect(elemento.isDisplayed()).toBeTruthy();
  }
};
