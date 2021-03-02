type IFn = <T extends string | number>(a: T, b: T) => string;

const bigNumAdd: IFn = (a, b) => {
  let n1 = a.toString();
  let n2 = b.toString();

  const maxLen = Math.max(n1.length, n2.length);

  // 补齐位数，左侧补0
  n1 = n1.padStart(maxLen, "0");
  n2 = n2.padStart(maxLen, "0");
  let f = 0; // 进位
  let t = 0; // 每次加和
  let sum = ""; // 总和
  for (let i = maxLen - 1; i >= 0; --i) {
    t = parseInt(n1[i], 10) + parseInt(n2[i], 10) + f;
    console.log(t);
    f = Math.floor(t / 10); // 新的进位
    sum = (t % 10) + sum;
  }
  // 最后一位进位
  if (f === 1) {
    sum = "1" + sum;
  }
  return sum;
};

export default {
  bigNumAdd,
};
