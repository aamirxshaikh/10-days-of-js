function getGrade(score) {
  // Write your code here.

  if (score > 25) return "A";
  if (score > 20) return "B";
  if (score > 15) return "C";
  if (score > 10) return "D";
  if (score > 5) return "E";
  
  return "F";
}

console.log(getGrade(25));
