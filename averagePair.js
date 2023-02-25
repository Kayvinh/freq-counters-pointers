"use strict";

/** Looks through an array to find if there is a pair of numbers whose average
 * matches a target number. Returns a boolean.
 */
function averagePair(nums, targetAvg) {
  if (nums.length === 0) return false;
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    // console.log ("inside while loop");
    // console.log(typeof nums[leftPointer]);
    if (typeof nums[leftPointer] !== "number" ||
     typeof nums[rightPointer] !== "number") {
       return false;
    }

    let avg = (nums[leftPointer] + nums[rightPointer]) / 2;

    // console.log("left ", nums[leftPointer], "right ", nums[rightPointer]);
    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      rightPointer--;
    } else if (avg < targetAvg) {
      leftPointer++;
    }
  }

  return false;
}



averagePair([1, 2, 3], 2.5);         // true
// averagePair([3, 3, 6, 12, 19], 8);   // false
// averagePair([1, 2, 3], 2);           // true
// averagePair([], 4);                  // false