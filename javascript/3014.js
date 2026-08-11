/**
 * 3014. Minimum Number of Pushes to Type Word I
 * Easy
 * 
 * Runtime: 00.00 ms | Beats 100.00%
 * Memory:  54.15 mb | Beats  65.47%
 * 
 * @param {string} word
 * @return {number}
 */


/**
 * Notes:
 * There are 8 keys that can be assigned a letter,
 * where the # of presses required to enter the nth assigned
 * letter is n. It makes sense then that you should
 * fill the keys with the least assigned letters first.
 * 
 * The code iterates through the length of the word,
 * and adds the cost depending on when it is assigned a key.
 * Letters 1-8 cost 1 push. Letters 2-16 cost 2 pushes, etc.
 * This only works because the problem specifies that letters
 * don't repeat, so the problem is relatively trivial. My 
 * solution could probably even be faster.
 */
var minimumPushes = function(word) {
    var val = 0;
    for(var i = 0; i < word.length; i++){
        val += 1 * (((i / 8) | 0) + 1);
    }
    return val;
};