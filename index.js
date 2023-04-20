function hasTargetSum(array, target) {
  // Write your algorithm here
}
function hasTargetSum(arr, target) {
  // Create a set to store seen numbers
  const set = new Set();
  
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the difference between the target and the current number has already been seen
    if (set.has(target - arr[i])) {
      // If so, a pair of numbers adds up to the target, so return true
      return true;
    }
    // Otherwise, add the current number to the set
    set.add(arr[i]);
  }
  
  // If no pair of numbers adds up to the target, return false
  return false;
}
/* 
  Write the Big O time complexity of your function here
*/
// O(n)
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
