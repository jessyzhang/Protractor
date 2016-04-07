// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],

  //change the browsers
  // capabilities: {
  //   browserName: 'firefox'
  // }
 // directConnect: true,
}

// //Run on more than 1 browser at once
// // conf.js
// exports.config = {
//   framework: 'jasmine',
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['spec.js'],
//   multiCapabilities: [{
//     browserName: 'firefox'
//   }, {
//     browserName: 'chrome'
//   }]
// }