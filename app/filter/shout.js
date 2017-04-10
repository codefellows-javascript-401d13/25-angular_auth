'use strict';


// TODO  MAKE A SHOUTING FILTER AND ANOTHER ONE AND PLUG THEM IN, ALSO ICONS

module.exports = function() {
  return function(galleries, searchTerm) {
    let shoutedRegex = generateFuzzyRegex(searchTerm);

    return galleries.filter(gallery => {
      return shoutedRegex.test(gallery.name.toUpperCase());
    });
  };
};

function generateFuzzyRegex(input) {
  if (!input) return /.*/;
  let shoutedString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  return new RegExp(shoutedString);
};
