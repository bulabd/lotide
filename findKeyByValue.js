const findKeyByValue = function(obj, value) {
  for (let genre in obj) {
    if (obj[genre] === value) {
      return genre;
    }
  }
  
  // let keys = Object.keys(obj);
  // for (let key of keys) {
  //   if (obj[key] === value) {
  //     return key;
  //   }
  // }
};

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;