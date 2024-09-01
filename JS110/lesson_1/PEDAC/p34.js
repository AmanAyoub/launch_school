/*
Usually when you buy something, you're asked whether your credit card number, phone number or
answer to your most secret question is still correct. However, since someone could look over your
shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

function maskify(string) {
  if (string.length < 4) return string;
  let chars = string.split('');
  return chars.fill("#", 0, chars.length - 4).join('');
}


console.log(maskify("4556364607935616"));                         // "############5616"
console.log(maskify("64607935616"));                              // "#######5616"
console.log(maskify("1"));                                        // "1"
console.log(maskify(""));                                         // ""
console.log(maskify("Skippy"));                                   // "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); // "####################################man!"
console.log(maskify("cnw"));