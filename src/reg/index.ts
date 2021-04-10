/**
 * remove any param in url
 * @param url
 * @param key
 * @returns {string} url after remove param
 */
const removeUrlParam = (url: string, key: string): string => {
  // url.match(/[\?&]key=[^&]*/g)
  let reg = new RegExp("[\\?&]" + key + "=[^&]*", "g");
  return url.replace(reg, "");
};

console.log(removeUrlParam("https://baidu.com?a=1&b=2&c=3", "b"));

/**
 * reverse first name and last name
 * @param name
 * @returns {string} name after reverse
 */
const reverseName = (name: string): string => {
  let reg = new RegExp("(\\w+)\\s(\\w+)", "g");
  return name.replace(reg, "$2 $1");

  // or
  return name.replace(reg, (result, group1, group2) => {
    return group2 + " " + group1;
  });

  // or
  return name.replace(/(\w+)\s(\w+)+/g, (result, group1, group2) => {
    return group2 + " " + group1;
  });
};

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
