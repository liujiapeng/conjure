import env from "../lib/env";

test("Android", () => {
  expect(env.isAndroid("Android")).toBe(true);
});
test("And--roid", () => {
  expect(env.isAndroid("And--roid")).toBe(false);
});

test("IOS", () => {
  expect(env.isIOS("IOS")).toBe(false);
});
test("i-os", () => {
  expect(env.isAndroid("i-os")).toBe(false);
});
