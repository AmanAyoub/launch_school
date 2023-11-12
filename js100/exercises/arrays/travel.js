// Write a function that checks whether or not a particular destination is included within destinations:

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function includes(city, map) {
	for (let i = 0; i < map.length; i++) {
		if (map[i] === city) {
			return true;
		} else {
			return false;
		}
	}
}

console.log(includes('Kabul', destinations)); // false
console.log(includes('Rome', destinations)); // true

