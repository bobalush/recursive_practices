/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(b, n) {
  // your code here
  let res = b;
  if (n === 0) {
    return 1;
  }
  if (n < 0 ){
    for (let i = 1 ; i < -n; i++ ){
      res  *= b;
    }
    return 1 / res;
  } else {
    for (let i = 1 ; i < n; i++ ){
      res  *= b;
    }
    return res;
  }
}
  
// Alternative solution

/* function exponent(num, power) {
  // Base case: when power is 0, return 1 (num^0 = 1)
  if (power === 0) {
      return 1;
  }
  // Recursive case for positive powers
  else if (power > 0) {
      return num * exponent(num, power - 1);
  }
  // Recursive case for negative powers
  else {
      return 1 / (num * exponent(num, (-power) - 1));
  }
} */

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = exponent;
} catch (e) {
  module.exports = null;
}
