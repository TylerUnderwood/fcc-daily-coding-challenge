testsLogger("isMirrorImage", [
    { guess: isMirrorImage("[HOW]", "[WOH]"), answer: true },
    { guess: isMirrorImage("MOM", "MOM"), answer: true },
    { guess: isMirrorImage("vow", "wov"), answer: true },
    { guess: isMirrorImage("TIM", "TIM"), answer: false },
    { guess: isMirrorImage("{WOW}", "}WOW{"), answer: false },
    { guess: isMirrorImage("XXVII", "IIV%X"), answer: false },
    { guess: isMirrorImage("><(((*>", "<*)))><"), answer: true },
    { guess: isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW"), answer: true }
])
