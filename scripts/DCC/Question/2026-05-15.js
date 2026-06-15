testsLogger("formatCoffeeOrder", [
    { guess: formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please."), answer: "oat latte + vanilla syrup + extra shot: $6.25" },
    { guess: formatCoffeeOrder("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk."), answer: "cappuccino + vanilla syrup + caramel drizzle + oat milk: $6.85" },
    { guess: formatCoffeeOrder("Can I get a cold brew with some cream and an extra shot."), answer: "cold brew + extra shot + cream: $5.75" },
    { guess: formatCoffeeOrder("Just an espresso please."), answer: "espresso: $3.00" },
    { guess: formatCoffeeOrder("I'll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle."), answer: "oat latte + vanilla syrup + caramel drizzle + extra shot + cream: $7.60" }
])
