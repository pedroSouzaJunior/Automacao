exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['cursoProtractorSpec.js'],
  //specs: ['spec.js', 'angularSpec.js', 'cursoProtractorSpec.js'],
  jasmineNodeOpts: {
    showColors: true,
  }
};
