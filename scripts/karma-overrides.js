var _ = require('lodash');
var here = require('kcd-common-tools/utils/here');

module.exports = function(defaultConfig) {
  defaultConfig.files = _.union([
    here('./node_modules/az-search-sorter/dist/index.js'),
    here('./node_modules/angular/angular.js'),
    here('./node_modules/angular-sanitize/angular-sanitize.js'),
    here('./node_modules/angular-mocks/angular-mocks.js'),
    here('./node_modules/ng-describe/dist/ng-describe.js')
  ], defaultConfig.files);
  return defaultConfig;
};
