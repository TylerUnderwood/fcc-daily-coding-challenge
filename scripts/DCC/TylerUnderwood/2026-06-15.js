function sortNumbers(str) {
    const numbers = str.split(',').map(Number);
    return numbers.sort((a, b) => a - b);
}
