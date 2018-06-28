const getAbsoluteValueSumMinimization = array => {
  const arrayLength = array.length;
  if (Math.floor(arrayLength / 2) === arrayLength / 2)
    return array[arrayLength / 2 - 1];
  else return array[arrayLength / 2];
};
