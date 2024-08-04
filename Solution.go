
import "fmt"

var RANGE_OF_VALUES [2]int = [2]int{1, 1000}

func canBeEqual(target []int, source []int) bool {
    frequency := make([]int, RANGE_OF_VALUES[1] + 1)
    for i := range target {
        frequency[target[i]]++
        frequency[source[i]]--
    }

    for _, current := range frequency {
        if current != 0 {
            return false
        }
    }
    return true
}
