let firstName = "John";
let lastName = "vali";
let fullName = firstName + " " + lastName;
console.log(fullName);

let fullString =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, sequi ad. Nostrum aliquid ex tempore, nesciunt laboriosam laudantium ab aut eius dolore dicta libero laborum, enim ipsam quia quaerat sed!";
let strLength = fullString.length;
console.log(strLength);
let firstChar = fullString[0];
console.log(firstChar);
let chatATIndex = fullString.charAt(2);
console.log(chatATIndex);
let indexOfChar = fullString.indexOf("i");
console.log(indexOfChar);
let subString = "vijayawada";
let breakSubString = subString.substring(0, subString.indexOf("a"));
console.log(breakSubString);

let multilineString = `
  This is a multiline
  string in JavaScript.
`;
console.log(multilineString);

let string1 = "apple";
let string2 = "apple1";
let comparisonResult = string1.localeCompare(string2);
console.log(comparisonResult);

//Anagram Detection

function areAnagram(str1, str2) {
  let clearString1 = str1.replace(/ /g, "").toLowerCase();
  let clearString2 = str2.replace(/ /g, "").toLowerCase();
  if (clearString1.length !== clearString2.length) {
    return false;
  }
  const charCount = {};
  for (const char of clearString1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
  for (const char of clearString2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char] = charCount[char] -= 1;
  }
  return Object.values(charCount).every((count) => count === 0);
}

const str1 = "listen";
const str2 = "silent";

if (areAnagram(str1, str2)) {
  console.log(`${str1} and ${str2} are anagrams.`);
} else {
  console.log(`${str1} and ${str2} are not anagrams.`);
}

//Palindrome Check

function isPalindrome(str1) {
  let clearString1 = str1.replace(/ /g, "").toLowerCase();
  const customLength = clearString1.length;
  for (let i = 0; i < customLength / 2; i++) {
    if (clearString1[i] !== clearString1[customLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

const palindromeString = "civic";

if (isPalindrome(palindromeString)) {
  console.log(`"${palindromeString}" is a palindrome.`);
} else {
  console.log(`"${palindromeString}" is not a palindrome.`);
}

//Longest Substring Without Repeating Characters

function longestSubstring(str) {
  const charIndexMap = {};
  let maxLength = 0;
  let startIndex = 0;
  for (let endIndex = 0; endIndex < str.length; endIndex++) {
    const currentChar = str[endIndex];
    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= startIndex
    ) {
      startIndex = charIndexMap[currentChar] + 1;
    }
    charIndexMap[currentChar] = endIndex;
    maxLength = Math.max(maxLength, endIndex - startIndex + 1);
  }
  console.log(charIndexMap);
  return maxLength;
}

const inputString = "abcabcbb";
const result = longestSubstring(inputString);
console.log(result);
