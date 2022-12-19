// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Count Vowel Consonant</h1>`;

/**
 * You are given a string s that consist of only lowercase English letters.  If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.
 *
 * Example:
 * - For s = "abcde", the output should be countVowelConsonant(s) = 8.
 *
 * Hints:
 * - split()
 * - reduce()
 */
function countVowelConsonant(str) {
  /* COMPLICATED METHOD */
  const regex = /[aeiou]/g;
  // const strArr = str.split('');
  // console.log(strArr);
  const counted = str.split('').reduce((a, c) => {
    const currCount = c.match(regex) ? a + 1 : a + 2;
    // console.log(c.match(regex));
    return currCount;
    // c.match(regex) ? 1 : 2;
  }, 0);

  /* SIMPLE METHOD */
  // let val = 0;
  // for (let i = 0; i < str.length; i++) {
  //   switch (str[i]) {
  //     case 'a':
  //     case 'A':
  //     case 'e':
  //     case 'E':
  //     case 'i':
  //     case 'I':
  //     case 'o':
  //     case 'O':
  //     case 'u':
  //     case 'U':
  //       val += 1;
  //       break;
  //     default:
  //       val += 2;
  //       break;
  //   }
  // }
  return counted;
}

console.log(countVowelConsonant('abcde'));
