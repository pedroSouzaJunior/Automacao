var angularHomepage = require('./AngularHomepage');
describe('angularjs homepage test',function() {

  it('should greet the named user',function() {
    angularHomepage.get();
    angularHomepage.setName('Pedro Souza Junior');
    expect(angularHomepage.getGreeting()).toEqual('Hello Pedro Souza Junior!');
  });
});
