testsLogger("getWiderAspectRatio", [
    { guess: getWiderAspectRatio("1920x1080", "800x600"), answer: "16:9" },
    { guess: getWiderAspectRatio("1080x1350", "2048x1536"), answer: "4:3" },
    { guess: getWiderAspectRatio("640x480", "2440x1220"), answer: "2:1" },
    { guess: getWiderAspectRatio("360x640", "1080x1920"), answer: "9:16" },
    { guess: getWiderAspectRatio("3440x1440", "2048x858"), answer: "43:18" },
    { guess: getWiderAspectRatio("12345x61234", "12534x51234"), answer: "2089:8539" }
])
