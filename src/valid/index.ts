/**
 * @desc 校验国内手机号是否合法
 * @param {String} phoneNum 手机号
 * @return {Boolean}
 */
const validatePhoneNum = (phoneNum: string): boolean => {
  const reg = /^1[0-9]{10}$/;
  return reg.test(phoneNum);
};

export default {
  validatePhoneNum,
};
