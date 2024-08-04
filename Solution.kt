
class Solution {

    private companion object {
        val RANGE_OF_VALUES = intArrayOf(1, 1000)
    }

    fun canBeEqual(target: IntArray, source: IntArray): Boolean {
        val frequency = IntArray(RANGE_OF_VALUES[1] + 1)
        for (i in target.indices) {
            ++frequency[target[i]]
            --frequency[source[i]]
        }

        for (current in frequency) {
            if (current != 0) {
                return false
            }
        }
        return true
    }
}
