function vowelCounter(string) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of string.toLowerCase()){
      if (vowels.includes(char)){
        vowelCount ++;
      }
    }   
    return vowelCount;   
}
