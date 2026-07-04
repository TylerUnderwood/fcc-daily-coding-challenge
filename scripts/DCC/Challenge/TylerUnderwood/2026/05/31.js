// @see https://www.youtube.com/watch?v=fczN0BCx0xs

function getCombinations(n) {
    if (n <= 0) return 1;
    let catalan = 1;
    for (let i = 1; i <= n; i++) {
        catalan = (catalan * 2 * (2 * i - 1)) / (i + 1);
    }
    return catalan;
}

/**
NOTES

1. All viable sets will start with open and end with closed

3 Pair === 5 Sets
Visual
()()()
(())()
()(())
(()())
((()))

*/
