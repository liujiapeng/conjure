/**
 * 下划线转驼峰
 * @param   {string} str
 * @returns {string}
 */
const lineToHump = (str: string): string => {
  let s = str.replace(/_(\w)/g, (res, char) => {
    return char.toUpperCase();
  });
  return s;
};


/**
 * 驼峰转下划线
 * @param   {string} str
 * @returns {string}
 */
const humpToLine = (str: string): string => {
  // return str.replace(/([A-Z])/g,"_$1").toLowerCase();
  let s = str.replace(/([A-Z])/g, (res) => {
    return "_" + res.toLowerCase();
  });
  return s;
};

