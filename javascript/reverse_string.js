function reverseString(str) {
  // type your code here
  let string = ""
  for (i=str.length-1; i>=0; i--) {
      string+=str[i]
  }
  return string
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// initialize an empty array
// iterate over inputted string from the end to the beginning of each letter 
// push the reversed letters to the empty array 
// join the array into a string