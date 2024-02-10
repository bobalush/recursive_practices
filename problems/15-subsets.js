/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  // Remove the last element of the array
  const lastElement = arr.pop();

  // Recursively get the subsets of the array without the last element
  const subsWithoutLast = subsets(arr);

  // For each subset without the last element, create a new subset that include the last element
  const subsWithLast = subsWithoutLast.map(sub => [...sub, lastElement]);

  // Combine the subsets without the last element with the subsets that include the last element
  return [...subsWithoutLast, ...subsWithLast]; 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
