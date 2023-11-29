// Loop over the elements of the array fish, logging each one. 
// Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
let index = 0;

while (index < fish.length) {
	console.log(fish[index]);
	if (fish[index] === 'Nemo') {
		break;
	}
	index += 1;
}
// Logs
// Dory
// Marlin
// Gill
// Nemo
