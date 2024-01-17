const intervals = [
  [1, 5],
  [1, 5],
  [6, 10],
  [11, 15],
  [6, 10],
  [1, 2],
];
function sumInterval(intervals) {
  // let a = intervals.length
  let [firstNumber, secondNumber] = intervals[0];
  let hashTable = [];
  let res = 0;
  let res2 = 0;

  for (let i = 1; i < intervals.length; i++) {
    let [first, second] = intervals[i];
    if (first <= secondNumber) {
      secondNumber = second;
    } else {
      hashTable.push(intervals[i]);
    }
  }
  hashTable.unshift([firstNumber, secondNumber]);
  console.log(firstNumber, secondNumber);
  console.log({ hashTable });
  let [firstNumber1, secondNumber1] = hashTable[0];
  for (let i = 1; i < hashTable.length; i++) {
    let [first, second] = hashTable[i];
    if (first <= secondNumber1) {
      // console.log(first, second)
      secondNumber1 = second;
      hashTable.splice(i, 1);
    }
    //  else {
    //   hashTable.push(intervals[i]);
    // }
  }
  console.log(firstNumber1, secondNumber1);
  let res1 = secondNumber1 - firstNumber1;
  console.log({ hashTable });
  console.log({ res1 });
  return;
  if (hashTable.length) {
    for (let i = 0; i < hashTable.length; i++) {
      let [first, second] = hashTable[i];
      if (first <= secondNumber) {
        // console.log(first, second)
        secondNumber = second;
        hashTable.splice(i, 1);
      } else {
        console.log(hashTable[i]);
        //   hashTable.push(hashTable[i]);
      }
    }
    // let [firstNumber, secondNumber] = hashTable[0];
    // res = secondNumber - firstNumber;
  }

  //   if (hashTable.length) {
  //     for (const [start, end] of hashTable) {
  //   console.log({ hashTable });

  //         res2 += end - start
  //     }
  //     console.log('нужно что-то делать', res2)
  //   }

  console.log(firstNumber, secondNumber);
  let result = secondNumber - firstNumber + res + res2;
  console.log({ result });
  return result;
}

function sumInterval1(intervals) {
  let mapHash = new Map();
  for (let i = 0; i < intervals.length; i++) {
    let [first, second] = intervals[i];
    mapHash.set(first, intervals[i]);
  }
  console.log(mapHash);

  let [first, second] = intervals[0];
  console.log({ second });
  let res = [];
  mapHash.forEach((value, first) => {
    if (second >= first) {
      console.warn(value);
      second = value[1];
      mapHash.delete(first);
      res.push(...value);
    }
  });
  console.log({ res });

  let mim = Math.min(...res);
  let max = Math.max(...res);
  let res3 = max - mim;
  console.log("min", mim);
  console.log("max", max);
  console.log("res", res3);
  let res2 = 0;
  if (mapHash.size) {
    console.log("что-то осталось");
    mapHash.forEach((value, first) => {
      console.log(value, first);
      if (max >= first) {
        res.push(...value);
        max = Math.max(...res);
        mapHash.delete(first);
      } else {
        console.log("сюда  зашли", first);
        res2 = res2 + (value[1] - first);
      }
    });
  }
  console.log(max);
  console.log({ res2 });
  //   let finally1 = res2+res3
  let finally1 = max - mim + res2;
  console.log({ finally1 });
  return finally1;
}
function sumIntervals(intervals) {
    // Сортируем интервалы по начальному значению
    intervals.sort((a, b) => a[0] - b[0]);
    debugger
  
    let totalSum = 0;
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];
  
    for (let i = 1; i < intervals.length; i++) {
      const [nextStart, nextEnd] = intervals[i];
  
      // Если текущий интервал пересекается с следующим
      if (currentEnd >= nextStart) {
        currentEnd = Math.max(currentEnd, nextEnd); // Обновляем конец текущего интервала
      } else {
        // Если нет пересечения, добавляем текущий интервал к сумме и обновляем текущий интервал
        totalSum += currentEnd - currentStart;
        currentStart = nextStart;
        currentEnd = nextEnd;
      }
    }
  
    // Добавляем последний интервал к сумме
    totalSum += currentEnd - currentStart;
  
    return totalSum;
}
// sumInterval(intervals);
// sumInterval1(intervals);
sumIntervals(intervals);
