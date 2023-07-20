function findMissingNumber(nums) {
    const n = nums.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = nums.reduce((acc, num) => acc + num, 0);
  
    return totalSum - arraySum;
  }
  
  const nums = [1, 3, 4, 5, 6];
  console.log(findMissingNumber(nums));