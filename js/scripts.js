const vowels = ["a", "e", "i", "o", "u"];

function vowelCounter(vowels,string) {
  let vowelCount=0;
  for (let i = 0; i < vowels.length; i+=1){
      if (vowels[i] === string.toLowerCase()){
        vowelCount ++;
        console.log(vowelCount);
        return vowelCount;
      } else {
        return 0;
      }
  }
}


/*
let vowelCount = 0;
for(let i = 0; i< vowels.length; i+=1){
  if(vowels[i] === string.toLowerCase()){
    vowelCount ++;
    console.log(vowelCount);
    return vowelCount;
  }
}*/
