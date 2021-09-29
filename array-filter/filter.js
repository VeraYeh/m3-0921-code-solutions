const numberLs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const nameLs = [
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

function filters(array, predicate) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const evenNumber = filters(numberLs, number => number % 2 === 0);

const overFives = filters(numberLs, number => number > 5);

const startsWithE = filters(nameLs, name => name[0] === 'E');

const havesD = filters(nameLs, name => name.toLowerCase().indexOf('d') !== -1);

console.log('evenn numbers', evenNumber);

console.log('numbers over five', overFives);

console.log('names start with E', startsWithE);

console.log('names have D or d', havesD);
