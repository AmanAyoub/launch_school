// write a for loop that loops over the elements of the array cities and logs the length of each string to the console. 
// If the element is null, skip forward to the next iteration without logging anything to the console.
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i++) {
	let element = cities[i];
	
	if (element === null) {
		continue;
	}
	console.log(element.length);
}
// logs:
// 8
// 11
// 5
// 6
// 6
// 7	
