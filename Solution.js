
/**
 * @param {number[]} target
 * @param {number[]} source
 * @return {boolean}
 */
var canBeEqual = function (target, source) {
    const RANGE_OF_VALUES = [1, 1000];
    const frequency = new Array(RANGE_OF_VALUES[1] + 1).fill(0);
    for (let i = 0; i < target.length; ++i) {
        ++frequency[target[i]];
        --frequency[source[i]];
    }

    for (let current of frequency) {
        if (current !== 0) {
            return false;
        }
    }
    return true;
};
