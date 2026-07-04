testsLogger("britishToAmerican", [
    { guess: britishToAmerican("I love the colour blue."), answer: "I love the color blue." },
    { guess: britishToAmerican("The fibre optic cable is new."), answer: "The fiber optic cable is new." },
    { guess: britishToAmerican("It's an honour to meet someone with such humour."), answer: "It's an honor to meet someone with such humor." },
    { guess: britishToAmerican("The unrecognised artist analysed his colour palette at the centre."), answer: "The unrecognized artist analyzed his color palette at the center." },
    { guess: britishToAmerican("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful."), answer: "The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful." }
])
