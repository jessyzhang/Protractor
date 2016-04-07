//spec js

//This test is for interacting with elements and multiple scenarios
// describe('Protractor Demo App', function(){
// 	var firstNumber = element(by.model('first'));
// 	var secondNumber = element(by.model('second'));
// 	var goButton = element(by.id('gobutton'));
// 	var latestResult = element(by.binding('latest'));

// 	beforeEach(function(){
// 		browser.get('http://juliemr.github.io/protractor-demo/');;
// 	});

// 	it('should have a title', function() {
// 		browser.get('http://juliemr.github.io/protractor-demo/');

// 		expect (browser.getTitle()).toEqual ('Super Calculator');
// 	});

// 	it('should add 3 and 2', function(){
// 		firstNumber.sendKeys('3');
// 		secondNumber.sendKeys('2');
// 		goButton.click();

// 		expect(latestResult.getText()).toEqual('5');
// 	});

// 	it('should add 4 and 6', function(){
// 		firstNumber.sendKeys('4');
// 		secondNumber.sendKeys('6');
// 		goButton.click();

// 		expect(latestResult.getText()).toEqual('10');
// 	})
// });

// spec.js
describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  // it('should have a history', function() {
  //   add(1, 2);
  //   add(3, 4);

  //   expect(history.count()).toEqual(2);

  //   add(5, 6);

  //   expect(history.count()).toEqual(3); // This is wrong!
  // });

//   it('should have type my addition', function(){
//   	add(5, 6);
//   	add(7, 8);

//   	expect(history.last().getText()).toContain('5+6');
//   	expect(history.first().getText()).toContain('7+8');
//   })
it('should have a history', function() {
    add(1, 2);
    add(3, 4);

   expect(history.last().getText()).toContain('1 + 2');
   //expect(history.first().getText()).toContain(3+4); // This is wrong!
  });
});
  