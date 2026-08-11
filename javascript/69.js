/**
 * 69. Sqrt(x)
 * Easy
 * 
 * Runtime: 00.00 ms | Beats 100.00%
 * Memory:  56.95 mb | Beats  23.50%
 * 
 * @param {number} x
 * @return {number}
 */

/**
 * Notes:
 * This problem requires finding the square
 * root of a number rounded to the nearest integer (floor)
 * 
 * We do this by doing a binary search for the sqrt integer.
 * With each guess, we see if guess*guess = x. Note, that
 * if working in other languages, we risk an overflow by having
 * too high of a number. We can instead use an equivalent statement
 * by rearranging terms, like guess === x/guess, but for javascript
 * this is not necessary.
 * 
 * The algorithm logic is exactly the same as any other binary search.
 * It checks the value against x and adjusts the bounds until either
 * no other guesses can be made or an exact equivalent is found.
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    let lb = 1, ub = x;
    while (lb <= ub) {
        let guess = lb + Math.floor((ub - lb) / 2);
        if (guess * guess === x) return guess;
        if (guess * guess < x) {
            lb = guess + 1;
        } else {
            ub = guess - 1;
        }
    }
    return ub;
};
