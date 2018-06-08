export const merge = (...arrs) => {
  let max = arrs.map(arr => arr.length).reduce((a, b) => Math.max(a, b));
  const range = num => [...Array(num)].map((v, i) => i);
  return range(max).map(i => range(arrs.length).map(j => arrs[j][i]));
};
