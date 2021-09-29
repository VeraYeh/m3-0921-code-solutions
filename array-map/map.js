const numberLs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languagesLs = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

function maps(array, transform) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(transform(array[i]));
  }
  return newArray;
}

const doubles = maps(numberLs, number => number * 2);

const toPrices = maps(numberLs, number => `$${number.toFixed(2)}`);

const upperCases = maps(languagesLs, language => language.toUpperCase());

const firstLetter = maps(languagesLs, language => language[0]);

console.log('numbers doubled', doubles);

console.log('numbers to prices', toPrices);

console.log('upperCased languages', upperCases);

console.log('first letter of languages', firstLetter);
