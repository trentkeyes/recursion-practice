const mergeSort = (arr) => {
  if (arr.length < 2) {
    return [arr[0]];
  }
  //copy first half into array b
  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  //copy second half into array c
  const secondHalf = arr.slice(Math.floor(arr.length / 2));
  //mergesort b
  const b = mergeSort(firstHalf);
  //mergesort c
  const c = mergeSort(secondHalf);
  // merge b, c
  let a = [];
  let i = 0;
  let j = 0;

  while (i < b.length || j < c.length) {
    if (b[i] >= c[j] || !b[i]) {
      a.push(c[j]);
      j++;
    } else if (c[j] >= b[i] || !c[j]) {
      a.push(b[i]);
      i++;
    }
  }
  return a;
};
