function getLuckyNumber(name) {
  const [firstName, lastName] = name.split(' ');
  const vowels = 'aeiouAEIOU';

  // Count vowels and consonants for each name
  const countVowels = (str) => [...str].filter(c => vowels.includes(c)).length;
  const countConsonants = (str) => [...str].filter(c => !vowels.includes(c) && /[a-zA-Z]/.test(c)).length;

  const firstVowels = countVowels(firstName);
  const firstConsonants = countConsonants(firstName);
  const lastVowels = countVowels(lastName);
  const lastConsonants = countConsonants(lastName);

  // Determine smaller and larger counts
  const smallerVowels = Math.min(firstVowels, lastVowels);
  const smallerConsonants = Math.min(firstConsonants, lastConsonants);
  const largerVowels = Math.max(firstVowels, lastVowels);
  const largerConsonants = Math.max(firstConsonants, lastConsonants);
  const smallerNameLength = Math.min(firstName.length, lastName.length);
  const largerNameLength = Math.max(firstName.length, lastName.length);

  // Calculate the two products
  const smallerProduct = smallerVowels * smallerConsonants * smallerNameLength;
  const largerProduct = largerVowels * largerConsonants * largerNameLength;

  // Calculate the lucky number
  let luckyNumber = largerProduct - smallerProduct;

  // If the final value is zero (0), return 13
  if (luckyNumber === 0) {
    luckyNumber = 13;
  }

  return luckyNumber;
}
