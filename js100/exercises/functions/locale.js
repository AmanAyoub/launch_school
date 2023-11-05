// Let's write a function that extracts the language code from a locale:

function extractLanguage(locale) {
	return locale.substring(0, 2);
}
console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// On line 4, the substring() method extracts characters, between two indices, from a string, 
// and returns the substring.
