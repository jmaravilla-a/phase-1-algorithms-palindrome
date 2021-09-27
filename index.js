function isPalindrome(word) {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString === word;
}
  isPalindrome('Hello');
  // const len = word.length;
  // let flipped = [];
  // for (let i = 1; i <= len; i++) {
  //   flipped.push(word[len - i]);
  // }; 
  // let flip = workArray.join()
  // return word === flip
  // // Write your algorithm here


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
