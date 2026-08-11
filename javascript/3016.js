/**
 * 3016. Minimum Number of Pushes to Type Word II
 * Medium
 * 
 * Runtime: 08.00 ms | Beats  98.10%
 * Memory:  61.16 mb | Beats  95.52%
 * 
 * @param {string} word
 * @return {number}
 */


/**
 * Notes:
 * This is the same idea as 3014, but in this
 * case the letters can show up more than once
 * in a word.
 * 
 * Theory-wise, this doesn't change much. It just
 * means that the presses for a letter aren't just
 * the cost tied to the order assigned to a key, 
 * but also multiplied by the frequency.
 * 
 * Since we're still trying to reduce the number of
 * presses, we want to assign the letters first
 * to the keys with the least assigned letters. We do
 * this not simply in order of appearance like the last
 * problem, but by frequency. This adds some algorithmic
 * overhead. We do this in javascript by creating an array
 * and filling it with char codes, similar to a c lang
 * type solution. We then sort that, and find the 
 * # of pushes similarly to the prior problem.
 */
var minimumPushes = function(word) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        freq[word.charCodeAt(i) - 97]++;
    }

    freq.sort((a, b) => b - a);

    let pushes = 0;
    for (let j = 0; j < 26 && freq[j] > 0; j++) {
        pushes += freq[j] * (((j / 8) | 0) + 1);
    }

    return pushes;
};