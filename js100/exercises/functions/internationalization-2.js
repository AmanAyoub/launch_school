// Let's write a function that takes a locale as input, and returns a greeting:

function extractLanguage(locale) {
        return locale.substring(0, 2);
}

function extractRegion(locale) {
        return locale.substring(3, 5);
}

function greet(language) {
        switch (language) {
                case 'ps': return 'Salam!';
                case 'en': return 'Hi!';
                case 'es': return 'Hola!';
                case 'ru': return 'Prevet!';
                case 'hi': return 'Namaste!';
        }
}

function localeGreet(locale) {
	let language = extractLanguage(locale);
	let region = extractRegion(locale);
	switch(region) {
		case 'AF': return 'Salam!';
		case 'IN': return 'Namaste!';
		case 'IR': return 'Salam!';
		case 'US': return 'Hey!';
		default:
			return greet(language);
	}
}

console.log(localeGreet('fa-IR')); // Salam!
console.log(localeGreet('hi-IN')); // Namaste!
console.log(localeGreet('ru-RU')); // Prevet!

