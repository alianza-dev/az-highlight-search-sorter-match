import ngModuleName from './index.js';

ngDescribe({
  name: ngModuleName,
  module: ngModuleName,
  inject: ['$filter'],
  tests: function(deps) {
    let highlight;
    beforeEach(() => {
      highlight = deps.$filter('highlightSearchSorterMatch');
    });

    it(`should not blow up when passed nothing`, function() {
      expect(() => highlight()).to.not.throw();
    });

    it(`should highlight what it contains exactly`, () => {
      const input = 'Hello World';
      const search = 'ello W';
      const result = highlight(input, search);
      expect(result.$$unwrapTrustedValue()).to.equal('H<strong>ello W</strong>orld');
    });

    it(`should highlight indexes when it's not exactly contained`, () => {
      const input = 'Choose the Right';
      const search = 'CHH';
      const result = highlight(input, search);
      expect(result.$$unwrapTrustedValue()).to.equal('<strong>Ch</strong>oose t<strong>h</strong>e Right');
    });

    it(`should highlight an acronym`, () => {
      const input = 'Choose the Right';
      const search = 'CTR';
      const result = highlight(input, search);
      const expectedResult = '<strong>C</strong>hoose <strong>t</strong>he <strong>R</strong>ight';
      expect(result.$$unwrapTrustedValue()).to.equal(expectedResult);
    });

    it(`should not highlight anything if nothing actually matches`, () => {
      const input = 'Choose the Right';
      const search = 'CTW';
      const result = highlight(input, search);
      expect(result.$$unwrapTrustedValue()).to.equal(input);
    });
  }
});
