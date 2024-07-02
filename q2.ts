function arrayStringify(a) {
  /* Your code here */
  let sum = "";
  for(let i=0 ; i<a.length ; i++){
    sum += a[i];
  }
  return sum;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;
