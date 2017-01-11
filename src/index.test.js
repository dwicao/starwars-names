var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
  describe('all', function() {
    it('should be an array of string', function() {
      expect(starWars.all).to.satisfy(isArrayOfString);

      function isArrayOfString(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Shmi Skywalker`', function() {
      expect(starWars.all).to.include('Shmi Skywalker');
    })
  });

  describe('random', function() {
    it('should  return random item from starWars.all', function() {
      var randomItems = starWars.random();
      expect(starWars.all).to.include(randomItems);
    })
  })
});