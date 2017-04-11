'use strict';

module.exports = function() {
  return function(galleries, searchTerm) {
    let fuzzyRegex = generateFuzzyRegex(searchTerm);
    console.log(searchTerm);
    return galleries.filter(gallery => {
      return fuzzyRegex.test(gallery.name.toUpperCase());
    });
  };
};

function generateFuzzyRegex(input) {
  if(!input) return /.*/;
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  // split makes an array, join makes a string
  console.log(fuzzyString);
  return new RegExp(fuzzyString);
}
