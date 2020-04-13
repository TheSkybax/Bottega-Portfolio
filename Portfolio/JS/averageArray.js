const getAverage = arr => {
  const reducer = (total, currentValue) => total + currentValue;
  const sum = arr.reduce(reducer);
  console.log(sum / arr.length);
}

getAverage([1, 2, 3]);
