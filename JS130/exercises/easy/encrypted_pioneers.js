/*
The following list contains the names of individuals who are pioneers in the field
of computing or that have had a significant influence on the field.
The names are in an encrypted form, though, using a simple (and incredibly weak) form of encryption called Rot13.


Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu
// Write a program that deciphers and prints each of these names.
*/
const NAMES = [
  "Nqn Ybirynpr", "Tenpr Ubccre", "Nqryr Tbyqfgvar",
  "Nyna Ghevat", "Puneyrf Onoontr", "Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv",
  "Wbua Ngnanfbss", "Ybvf Unvog", "Pynhqr Funaaba",
  "Fgrir Wbof", "Ovyy Tngrf", "Gvz Orearef-Yrr",
  "Fgrir Jbmavnx", "Xbaenq Mhfr", "Fve Nagbal Ubner",
  "Zneiva Zvafxl", "Lhxvuveb Zngfhzbgb", "Unllvz Fybavzfxv",
  "Tregehqr Oynapu"
];
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";

function decipher(string) {
  let resultStr = "";
  for (let char of string) {
    if (/[^a-z]/i.test(char)) { // If not an alphabet
      resultStr += char;
    } else {
      resultStr += char.toLowerCase() === char ? nextThirteenth(char) :
      nextThirteenth(char).toUpperCase();
    }
  }

  return resultStr;
}

function nextThirteenth(char) {
  char = char.toLowerCase();
  let index = ALPHABETS.indexOf(char) + 13;
  if (index > 25) {
    index = index % 26;
  }

  return ALPHABETS[index];
}

NAMES.forEach(name => console.log(decipher(name)));