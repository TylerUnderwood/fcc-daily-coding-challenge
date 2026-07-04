testsLogger("getFrequency", [
    { guess: getFrequency("test"), answer: {t: 2, e: 1, s: 1} },
    { guess: getFrequency("mississippi"), answer: {m: 1, i: 4, s: 4, p: 2} },
    { guess: getFrequency("hello world"), answer: {h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1} },
    { guess: getFrequency("She sells seashells by the seashore."), answer: {S: 1, h: 4, e: 7, " ": 5, s: 7, l: 4, a: 2, b: 1, y: 1, t: 1, o: 1, r: 1, ".": 1} },
    { guess: getFrequency("The quick brown fox jumps over the lazy dog."), answer: {T: 1, h: 2, e: 3, " ": 8, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 4, w: 1, n: 1, f: 1, x: 1, j: 1, m: 1, p: 1, s: 1, v: 1, t: 1, l: 1, a: 1, z: 1, y: 1, d: 1, g: 1, ".": 1} }
])
