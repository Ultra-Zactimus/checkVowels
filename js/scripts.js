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

function wordAy(string){
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;
  for(let char of string){
    if(vowelIndex.includes(char)){
      vowelIndex = string.indexOf(char);
      break;
  }
  return string.slice(vowels) + string.slice(0, vowels) + "ay";
}


/*function consonantTransformer(string){
  const vowels = ["a","e","i","o","u"];
  for(i = 0; i < vowels.length; i++){
    if(string.charAt(0) != vowels[i]){
      let string2 = string.substring(0);
      console.log(string2 + string.charAt(0) + "ay");
    }
  }
}*/