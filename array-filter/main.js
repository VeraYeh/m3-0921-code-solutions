const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);

const overFive = numbers.filter(number => number > 5);

const startWithE = names.filter(name => name[0] === 'E');

const haveD = names.filter(name => name.toLowerCase().indexOf('d') !== -1);

console.log('evenn numbers', evenNumbers);

console.log('numbers over five', overFive);

console.log('names start with E', startWithE);

console.log('names have D or d', haveD);
