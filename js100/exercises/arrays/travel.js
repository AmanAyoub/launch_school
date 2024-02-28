// Write a function that checks whether or not a particular
// destination is included within destinations:

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function includes(city, map) {
  let test = map.forEach(element => {
    if (element === city) {
      return true;
    } else {
      return false;
    }
  }
  );
  return test;
}

console.log(includes('Kabul', destinations)); // false
console.log(includes('Rome', destinations)); // true
