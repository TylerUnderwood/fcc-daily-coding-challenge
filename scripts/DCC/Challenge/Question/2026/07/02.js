testsLogger("getMaxProfit", [
    { guess: getMaxProfit([5, 6], 50), answer: "10.00" },
    { guess: getMaxProfit([8, 2, 5, 10], 20), answer: "80.00" },
    { guess: getMaxProfit([4, 5, 3, 6], 20), answer: "18.00" },
    { guess: getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200), answer: "8.31" },
    { guess: getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80), answer: "0.00" },
    { guess: getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25), answer: "73.80" }
])
