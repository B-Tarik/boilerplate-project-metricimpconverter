/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      const input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '32.5L';
      assert.equal(convertHandler.getNum(input),32.5);
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '32/3L';
      assert.equal(convertHandler.getNum(input),10.66667);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '32.5/3L';
      assert.equal(convertHandler.getNum(input),10.83333);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      const input = '32.5//3L';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
    });
    
    test('No Numerical Input', function(done) {
      const input = "kg";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(elm) {
        assert.equal(convertHandler.getUnit(elm), elm.toLowerCase());
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = '32.5//3Lda';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(elm, i) {
        assert.equal(convertHandler.getReturnUnit(elm), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      
      input.forEach(function(elm, i){
        assert.equal(convertHandler.spellOutUnit(elm), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var [num, unit] = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(num, unit), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var [num, unit] = [5, 'l'];
      var expected = 1.32085;
      assert.approximately(convertHandler.convert(num, unit), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var [num, unit] = [5, 'mi'];
      var expected = 8.0467;
      assert.approximately(convertHandler.convert(num, unit), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var [num, unit] = [5, 'km'];
      var expected = 3.10685;
      assert.approximately(convertHandler.convert(num, unit), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var [num, unit] = [5, 'lbs'];
      var expected = 2.26795;
      assert.approximately(convertHandler.convert(num, unit), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var [num, unit] = [5, 'kg'];
      var expected = 11.0231;
      assert.approximately(convertHandler.convert(num, unit), expected, 0.1); //0.1 tolerance
      done();
    });
    
  });

});
