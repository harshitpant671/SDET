function mergeTwoSortArray(leftArray, rightArray) {
  let newarray = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      newarray[k] = leftArray[i];
      i++;
    } else {
      newarray[k] = rightArray[j];
      j++;
    }

    k++;
  }

  console.log(i);
  console.log(leftArray.length);

  for (let left = i; left < leftArray.length; left++) {
    newarray[k] = leftArray[left];
    k++;
  }

  console.log(j);
  console.log(rightArray.length);

  for (let right = j; right < rightArray.length; right++) {
    newarray[k] = rightArray[right];
    k++;
  }

  return newarray;
}

console.log(mergeTwoSortArray([1, 2, 4, 6, 7], [1, 2, 3, 10]));
