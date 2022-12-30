module.exports = function reverse (n) {
  if (n < 0) {
    n *= -1;
  }
  let arr1   = String(n).split('');
  let arr2   = arr1.reverse();
  let result = arr2.join('');
  return result
}
