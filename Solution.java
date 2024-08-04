
public class Solution {

    private static final int[] RANGE_OF_VALUES = {1, 1000};

    public boolean canBeEqual(int[] target, int[] source) {
        int[] frequency = new int[RANGE_OF_VALUES[1] + 1];
        for (int i = 0; i < target.length; ++i) {
            ++frequency[target[i]];
            --frequency[source[i]];
        }

        for (int current : frequency) {
            if (current != 0) {
                return false;
            }
        }
        return true;
    }
}
