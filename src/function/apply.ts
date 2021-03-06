/**
 * 原型挂载
 * @param context
 * @param resArgs
 */
const _apply = function (context: any, resArgs): unknown {
  context = context instanceof Object ? context : {};

  context["fn"] = this; // 把function给到指定的上下文 | function.call(obj,1,2,3), this 指的就是function

  const result = context["fn"](...resArgs); // 带参执行

  delete context.fn;

  return result;
};

/**
 * 对外暴露
 * @param fnc
 * @param context
 * @param resArgs
 * @returns
 */
const apply = function (fnc: Function, context: any, resArgs): unknown {
  context = context instanceof Object ? context : {};

  context["fn"] = fnc; // 把function给到指定的上下文 | function.call(obj,1,2,3), this 指的就是function

  const result = context["fn"](...resArgs); // 带参执行

  delete context.fn;

  return result;
};

export default apply;
