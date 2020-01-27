const expect = require('chai').expect;
const sort = require('../sort');

describe('Sort function', () => {
    it('should arrange numbers in ascending order', () => {
      expect(sort([10, 2, 5, 1])).to.deep.equal([1, 2, 5, 10]);
    });
  
    // it('should throw an error when divide by zero', () => {
    //   expect(() => { divide(8, 0) }).to.throw();
    // });
  });