'use strict';


module.exports = function() {
  return function(galleries, searchTerm) {
    let fuzzyRegex = generateFuzzyRegex(searchTerm);

    return galleries.filter(gallery => {
      return fuzzyRegex.test(gallery.name.toUpperCase());
    });
  };
};

function generateFuzzyRegex(input){
  if(!input) return /.*/;
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*'; //split makes it an array, then join brings it back together into a string
  return new RegExp(fuzzyString);
}
