import call from "./call";
/**
 * 原型挂载
 * @param context
 * @param resArgs
 * @returns
 */
const _bind = function (context, ...resArgs) {
  let fnc = this;

  return function () {
    fnc.call(context, ...resArgs, ...arguments);
  };
};
Function.prototype.bind = _bind;

/**
 * 导出 手动传入function
 * @param fnc
 * @param context
 * @param resArgs
 * @returns
 */
const bind = function (fnc: Function, context, ...resArgs) {
  return function () {
    fnc.call(context, ...resArgs, ...arguments);
    // call(fnc, context, ...resArgs, arguments); 
  };
};

export default bind;
