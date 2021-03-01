/**
 * 是否安卓
 * @param UA
 */
const isAndroid = (UA: string): boolean =>
  UA.indexOf("Android") > -1 || UA.indexOf("Adr") > -1;

/**
 * 是否IOS
 * @param UA
 */
const isIOS = (UA: string): boolean =>
  !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

export default {
  isAndroid,
  isIOS,
};
