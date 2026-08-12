//

function MoveZero(arr) {
  let res = "";
  let s = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      let temp = arr[s];
      arr[s] = arr[fast];
      arr[fast] = temp;

      s++;
    }
  }
  return arr;
}

console.log(MoveZero([0, 1, 0, 3, 12]));

//Output : [1,3,12,0,0];
