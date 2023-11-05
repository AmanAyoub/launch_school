// Let's write a function that extracts the region code from a locale:

function extractLanguage(locale) {
        return locale.substring(3, 5);
}
console.log(extractLanguage('en_US.UTF-8'));  // US
console.log(extractLanguage('ko_KR.UTF-16')); // KR

// On line 4, the substring() method extracts characters, between two indices, from a string, 
// and returns the substring.

