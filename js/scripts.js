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

function vowelTransformer(string){
  const vowels = ["a", "e", "i", "o", "u"];
  for(i = 0; vowels.length; i++){
    if(string.charAt(0) === vowels[i]){
      return string + "way";
    }else{
      return string;
    }
  }
}