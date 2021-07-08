const paginateArray = (arr, current = 1, size = 9) =>
  arr.slice((current - 1) * size, current * size);

export default paginateArray;
