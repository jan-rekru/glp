const arr = [1, 3, 8, 4, 5, 0, 6, 9, -5, 55, 5.5, Infinity, NaN, 12, -4, -5.2, 2, 1, 8, -5, -Infinity, 8, 3, 0];

function findIndexes(arr: any, cb: any) {

  const indexes: any = [];


  arr.forEach((val: any, index: number) => {

    if(cb(val, index)) {
      indexes.push(index);
    }

  });
  return indexes;
}

function checkIfValueGreaterThanZero(item: any, index: number) {
  return item > 0;
}

const indexes = findIndexes(arr, checkIfValueGreaterThanZero);


console.log(indexes);
