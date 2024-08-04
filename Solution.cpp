
#include <array>
#include <vector>
using namespace std;

class Solution {

    static constexpr array<int, 2> RANGE_OF_VALUES = { 1, 1000 };

public:
    bool canBeEqual(const vector<int>& target, const vector<int>& source) const {
        array<int, RANGE_OF_VALUES[1] + 1> frequency{};
        for (size_t i = 0; i < target.size(); ++i) {
            ++frequency[target[i]];
            --frequency[source[i]];
        }

        for (const auto& current : frequency) {
            if (current != 0) {
                return false;
            }
        }
        return true;
    }
};
