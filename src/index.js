import angular from 'angular';
import azSearchSorter from 'az-search-sorter';
import escape from 'lodash.escape';
const ngModuleName = 'azHighlightSearchSorterMatch';

const ngModule = angular.module(ngModuleName, ['ngSanitize']);

export default ngModule
  .filter('highlightSearchSorterMatch', highlightSearchSorterMatchFunction)
  .name; // <-- exporting the module name

function highlightSearchSorterMatchFunction($sce) {
  const highlightOpen = '<strong>';
  const highlightClose = '</strong>';

  return function highlightSearchSorterMatch(input, search) {
    if (!input || !search) {
      return input;
    }
    let cleanInput = escape(input);
    const lowerCleanInput = cleanInput.toLowerCase();
    search = search.toLowerCase();
    if (contains(lowerCleanInput, search)) {
      cleanInput = cleanInput.replace(new RegExp('(' + search + ')', 'ig'), highlightOpen + '$1' + highlightClose);
    } else {
      cleanInput = highlightIndexes(cleanInput, search);
    }
    return $sce.trustAsHtml(cleanInput);
  };

  function highlightIndexes(cleanInput, search) {
    const lowerCleanInput = cleanInput.toLowerCase();
    let indexes = azSearchSorter.getAcronymIndexes(lowerCleanInput, search);
    if (isEmptyArray(indexes)) {
      indexes = azSearchSorter.getMatchingStringIndexes(lowerCleanInput, search);
    }
    if (!isEmptyArray(indexes)) {
      let highlightedInput = '';
      let currentIndex = 0;
      indexes.forEach(function(anIndex) {
        const needsOpen = !contains(indexes, anIndex - 1);
        const needsClose = !contains(indexes, anIndex + 1);
        const open = needsOpen ? highlightOpen : '';
        const close = needsClose ? highlightClose : '';
        highlightedInput += [
          cleanInput.substr(currentIndex, anIndex - currentIndex),
          open,
          cleanInput.substr(anIndex, 1),
          close
        ].join('');
        currentIndex = anIndex + 1;
      });
      cleanInput = highlightedInput + cleanInput.substr(currentIndex);
    }
    return cleanInput;
  }
}

// UTILS
function contains(container, item) {
  return container.indexOf(item) !== -1;
}

function isEmptyArray(thing) {
  return !thing || !thing.length;
}
