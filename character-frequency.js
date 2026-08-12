function characterFrequency(str) {
  let fre = {};
  for (let ch = 0; ch < str.length; ch++) {
    if (fre[str[ch]]) {
      fre[str[ch]]++;
    } else {
      fre[str[ch]] = 1;
    }
  }
  return fre;
}

console.log(characterFrequency("hello"));
// Output : {h:1,e:1,l:2,o:1}
