
using System;

public class Solution
{
    private static readonly int[] RANGE_OF_VALUES = { 1, 1000 };

    public bool CanBeEqual(int[] target, int[] source)
    {
        int[] frequency = new int[RANGE_OF_VALUES[1] + 1];
        for (int i = 0; i < target.Length; ++i)
        {
            ++frequency[target[i]];
            --frequency[source[i]];
        }

        foreach (int current in frequency)
        {
            if (current != 0)
            {
                return false;
            }
        }
        return true;
    }
}
