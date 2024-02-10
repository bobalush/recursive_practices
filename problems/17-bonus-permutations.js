/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here

function permutations(array) {
  if (array.length === 0) return [[]]; // Base case for empty array
  if (array.length === 1) return [array]; // Base case for a single element

  const perms = [];
  for (let i = 0; i < array.length; i++) {
      // Remove one element from the array
      const current = array[i];
      const remaining = array.slice(0, i).concat(array.slice(i + 1));
      // Recursively get permutations of the remaining elements
      const remainingPerms = permutations(remaining);
      // Prepend the removed element to each of the permutations of the remaining elements
      for (const perm of remainingPerms) {
          perms.push([current].concat(perm));
      }
  }
  return perms;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
