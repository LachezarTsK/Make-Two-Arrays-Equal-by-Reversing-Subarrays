
function canBeEqual(target: number[], source: number[]): boolean {
    const RANGE_OF_VALUES: number[] = [1, 1000];
    const frequency: number[] = new Array(RANGE_OF_VALUES[1] + 1).fill(0);
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
