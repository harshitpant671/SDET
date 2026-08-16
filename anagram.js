function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let fre = {};

  for (let i = 0; i < s.length; i++) {
    if (fre[s[i]] !== undefined) {
      fre[s[i]]++;
    } else {
      fre[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (fre[t[i]] === undefined) {
      return false;
    } else {
      fre[t[i]]--;
    }
  }

  return true;
}

console.log(validAnagram("rat", "car"));
