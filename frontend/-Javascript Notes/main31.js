nums = [5, 6, 7, 9, 10, 11, 11];

function getSecondLargest(nums) {
  // Complete the function
  let sortedNums = nums.sort((num1, num2) => num2 - num1);
  console.log(sortedNums);

  nums = [...new Set(nums)];
  console.log(nums);

  let result = nums.find((num1, num2) => (num2 <= num1 ? num2 : num1));
  return result;
}

console.log(getSecondLargest(nums));
