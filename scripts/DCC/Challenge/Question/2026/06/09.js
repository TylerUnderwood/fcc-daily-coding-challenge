testsLogger("getRoommates", [
    { guess: getRoommates([{ "name": "Alice", "group": "A" }, { "name": "Bob", "group": "B" }, { "name": "Carol", "group": "A" }]), answer: ["Alice and Carol", "Bob"] },
    { guess: getRoommates([{ "name": "John", "group": "C" }, { "name": "Julia", "group": "C" }, { "name": "Jim", "group": "C" }]), answer: ["John and Julia", "Jim"] },
    { guess: getRoommates([{ "name": "Adam", "group": "D" }, { "name": "Abraham", "group": "E" }, { "name": "Austin", "group": "E" }, { "name": "Augustus", "group": "D" }, { "name": "Angelica", "group": "D" }, { "name": "Aaron", "group": "E" }]), answer: ["Adam and Augustus", "Angelica", "Abraham and Austin", "Aaron"] },
    { guess: getRoommates([{ "name": "Frank", "group": "A" }, { "name": "Emitt", "group": "B" }, { "name": "Daria", "group": "F" }, { "name": "Charles", "group": "D" }, { "name": "Bailey", "group": "A" }, { "name": "Albert", "group": "F" }]), answer: ["Frank and Bailey", "Emitt", "Daria and Albert", "Charles"] },
    { guess: getRoommates([{ "name": "Kevin", "group": "A" }, { "name": "Yuri", "group": "A" }, { "name": "Hugo", "group": "B" }, { "name": "Violet", "group": "A" }, { "name": "Brett", "group": "A" }, { "name": "Wayne", "group": "B" }]), answer: ["Kevin and Yuri", "Violet and Brett", "Hugo and Wayne"] }
])
