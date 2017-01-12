import {expect} from 'chai';
import starWars from './index';

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
    });
  });

  describe('random', function() {
    it('should  return random item from starWars.all', function() {
      var randomItems = starWars.random();
      expect(starWars.all).to.include(randomItems);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
});
