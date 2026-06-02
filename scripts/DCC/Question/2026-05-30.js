const currentTest = {
  label: "getBestHand",
  tests: [
    {guess: getBestHand(["7s", "7h", "7d", "2c", "5h"]), answer: "Three of a Kind"},
    {guess: getBestHand(["Ks", "Kh", "Kd", "4s", "4h"]), answer: "Full House"},
    {guess: getBestHand(["2h", "5h", "7h", "9h", "Jh"]), answer: "Flush"},
    {guess: getBestHand(["As", "Ah", "Ad", "Ac", "Kh"]), answer: "Four of a Kind"},
    {guess: getBestHand(["Ts", "Th", "9d", "9c", "8h"]), answer: "Two Pair"},
    {guess: getBestHand(["9c", "8c", "7c", "6c", "5c"]), answer: "Straight Flush"},
    {guess: getBestHand(["As", "Kh", "Jd", "8c", "5h"]), answer: "High Card"},
    {guess: getBestHand(["As", "2h", "3d", "4c", "5h"]), answer: "Straight"},
    {guess: getBestHand(["Ts", "Th", "7c", "6d", "5h"]), answer: "Pair"},
    {guess: getBestHand(["As", "Ks", "Qs", "Js", "Ts"]), answer: "Royal Flush"},
  ]
}

testsLogger(currentTest.label, currentTest.tests)
