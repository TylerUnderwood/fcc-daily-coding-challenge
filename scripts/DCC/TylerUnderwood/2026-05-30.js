// All hands ordered best to worst
const handName = Object.freeze({
  royalFlush: "Royal Flush",
  straightFlush: "Straight Flush",
  fourOfAKind: "Four of a Kind",
  fullHouse: "Full House",
  flush: "Flush",
  straight: "Straight",
  threeOfAKind: "Three of a Kind",
  twoPair: "Two Pair",
  pair: "Pair",
  highCard: "High Card",
})

const cardRanks = Object.freeze([
  "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"
])

const cardSuits = Object.freeze([
  "d", "c", "h", "s"
])

const cardStrToObj = (card) => {
  const cardArr = Array.from(card)
  // We add a number value of rank to help with sorting and comparing
  return ({
    rank: cardArr[0],
    suit: cardArr[1],
    value: cardRanks.indexOf(cardArr[0])
  })
}

const cardObjToStr = (card) => {
  return `${card.rank}${card.suit}`
}

const cardsConverter = (cards, type) => {
  const cardsConverted = []

  cards.forEach((card) => {
    if (type === "Obj") {
      cardsConverted.push(cardStrToObj(card))
    }
    if (type === "Str") {
      cardsConverted.push(cardObjToStr(card))
    }
  })

  return cardsConverted
}

// Expects cards to be Obj
const cardsSorter = (cards) => {
  return cards.sort((a, b) => a.value - b.value)
}

// Expects cards to be Obj
const hasFlush = (cards) => {
  let allSameSuit = true
  // Start at second card since we are comparing to the first one
  let i = 1

  // Loop will break at first non-matching suit
  while (allSameSuit && i < cards.length) {
    if (cards[i].suit === cards[0].suit) {
      i++
    } else {
      allSameSuit = false
    }
  }

  return allSameSuit
}

// Expects cards to be Obj and sorted with Ace at end
const hasStraight = ((cards) => {
  if (cards.length !== 5) {
    return
  }

  let isSequential = true
  // Start at second card since we are comparing to the first one
  let i = 1

  // Loop will break at first non-sequential rank
  while (isSequential && i < cards.length) {
    const previousCard = cards[i - 1]
    const currentCard = cards[i]
    const isExpectedValue = currentCard.value === previousCard.value + 1
    // Since we expect ace to be last sorted, we can check for the wraparound
    const isAceException =
      i === cards.length - 1 &&
      previousCard.rank === "5" &&
      currentCard.rank === "A"

    if (isExpectedValue || isAceException) {
      i++
    } else {
      isSequential = false
    }
  }

  return isSequential
})

// Gives an array of arrays containing all matching cards
const getCardsOfAKind = (cards) => {
  const cardsOfAKind = []
  const ranksAccountedFor = []

  cards.forEach((card) => {
    // Return early so we don't add a match more than once
    if (ranksAccountedFor.find((rank) => card.rank === rank) !== undefined) {
      return
    }

    const matches = cards.filter((_card) => card.rank === _card.rank);

    if (matches.length > 1) {
      ranksAccountedFor.push(card.rank)
      cardsOfAKind.push(matches)
    }
  })

  // console.log("cardsOfAKind", cardsOfAKind)

  return cardsOfAKind
}

// --- NOT ALL HANDS ACCOUNTED FOR WIP ---
// Expects cards to be object and sorted
const getAllPlayableHands = (cards) => {
  let playableHands = []
  const handHasFlush = hasFlush(cards)
  const handHasStraight = hasStraight(cards)
  const handIsRoyal = handHasFlush && handHasStraight && cards[0].rank === "T"
  let cardsOfAKind = []

  // Only get cardsOfAKind when it is not a straight
  if (!handHasStraight) {
    cardsOfAKind = getCardsOfAKind(cards)
  }

  // Always add High Card
  const addHighCard = () => {
    playableHands.push({
      name: handName.highCard,
      hands: [cardObjToStr(cards[4])]
    })

    console.log("playableHands", playableHands)
  }

  // Many hands follow this pattern
  const addFullHandPlay = (name) => {
    playableHands.push({
      name,
      hands: [...cardsConverter(cards, "Str")]
    })
  }

  // Find RoyalFlush
  if (handIsRoyal) {
    addFullHandPlay(handName.royalFlush)
    addHighCard()
    return playableHands
  }

  // Find StraightFlush
  if (handHasFlush && handHasStraight) {
    addFullHandPlay(handName.straightFlush)
    addHighCard()
    return playableHands
  }

  // Find FourOfAKind
  if (cardsOfAKind.length > 0) {
    // If there is a four of a kind, there will only be one array
    if (cardsOfAKind[0].length === 4) {
      playableHands.push({
        name: handName.fourOfAKind,
        hands: [...cardsConverter(cards, "Str")]
      })
    }
  }

  // Find FullHouse
  if (cardsOfAKind.length === 2) {
    if (cardsOfAKind[0].length === 3 || cardsOfAKind[1].length === 3) {
      addFullHandPlay(handName.fullHouse)
    }
  }

  // Find Flush
  if (handHasFlush) {
    addFullHandPlay(handName.flush)
    addHighCard()
    return playableHands
  }

  // Find ThreeOfAKind
  if (cardsOfAKind.length > 0) {
    cardsOfAKind.forEach((matchingCards) => {
      if (matchingCards.length === 3) {
        playableHands.push({
          name: handName.threeOfAKind,
          hands: [...cardsConverter(matchingCards, "Str")]
        })
      }
    })
  }

  // Find Straight
  if (handHasStraight) {
    addFullHandPlay(handName.straight)
    addHighCard()
    return playableHands
  }

  // Find TwoPair
  if (cardsOfAKind.length === 2) {
    if (cardsOfAKind[0].length >= 2 && cardsOfAKind[1].length >= 2) {
      const matchingCards = [...cardsOfAKind[0], ...cardsOfAKind[1]]
      // THIS WILL CURRENTLY ALSO ADD A FULL HOUSE
      playableHands.push({
        name: handName.twoPair,
        hands: [...cardsConverter(matchingCards, "Str")]
      })
    }
  }

  // Find Pair
  if (cardsOfAKind.length > 0) {
    cardsOfAKind.forEach((matchingCards) => {
      if (matchingCards.length === 2) {
        playableHands.push({
          name: handName.pair,
          hands: [...cardsConverter(matchingCards, "Str")]
        })
      }
    })
  }

  // Find HighCard
  addHighCard()

  return playableHands
}


function getBestHand(cards) {
  let cardsObj = cardsConverter(cards, "Obj")
  cardsObj = cardsSorter(cardsObj)

  // First hand will be best
  return getAllPlayableHands(cardsObj)[0].name
}
