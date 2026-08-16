function firstNonRepeating(str) {
  let count = 0;
  let fre = {};
  for (let i = 0; i < str.length; i++) {
    if (fre[i] !== undefined) {
      fre[i]++;
    } else {
      fre[i] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (fre[str[i]] == 1) {
      return str[i];
    }
  }

  return [];
}

console.log(firstNonRepeating("swiss"));
