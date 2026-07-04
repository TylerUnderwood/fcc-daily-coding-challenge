testsLogger("getItineraryCount", [
    { guess: getItineraryCount(["library", "park"]), answer: 2 },
    { guess: getItineraryCount(["library", "park", "arcade"]), answer: 18 },
    { guess: getItineraryCount(["library", "park", "arcade", "store"]), answer: 120 },
    { guess: getItineraryCount(["library", "park", "arcade", "store", "cafe"]), answer: 840 },
    { guess: getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"]), answer: 55440 }
])
