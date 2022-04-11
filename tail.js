const tail = function(arr) {
  let newArr = [...arr];
  newArr.shift();
  return newArr;
};

module.exports = tail;
