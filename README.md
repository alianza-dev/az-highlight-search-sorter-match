# az-highlight-search-sorter-match

Status:
[![npm version](https://img.shields.io/npm/v/az-highlight-search-sorter-match.svg?style=flat-square)](https://www.npmjs.org/package/az-highlight-search-sorter-match)
[![npm downloads](https://img.shields.io/npm/dm/az-highlight-search-sorter-match.svg?style=flat-square)](http://npm-stat.com/charts.html?package=az-highlight-search-sorter-match&from=2015-06-01)
[![Build Status](https://snap-ci.com/alianza-dev/az-highlight-search-sorter-match/branch/master/build_image)](https://snap-ci.com/alianza-dev/az-highlight-search-sorter-match/branch/master)
[![Code Coverage](https://img.shields.io/codecov/c/github/alianza-dev/az-highlight-search-sorter-match.svg?style=flat-square)](https://codecov.io/github/alianza-dev/az-highlight-search-sorter-match)

az-highlight-search-sorter-match interfaces with az-search-sorter to identify matches in a search and return a
highlighted version of the search text.

[Demo](https://jsbin.com/sokeha/edit?html,js,console,output)

## Installation

```
npm install -S az-search-sorter az-highlight-search-sorter-match
```

## Usage:

Depend on the module

```javascript
angular.module('yourModule', ['azHighlightSearchSorterMatch']);
```

Use it

```html
<input ng-model="highlight" />
<div ng-bind-html="'Hello World' | highlightSearchSorterMatch:highlight"></div>
```

## LICENSE

MIT

## Code of Conduct

[Contributor Covenant](http://contributor-covenant.org)
