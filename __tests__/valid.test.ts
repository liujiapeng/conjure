import valid from "../lib/valid";


test("valid 13425121", () => {
  expect(valid.validatePhoneNum("13425121")).toBe(false);
});

test("valid 13425121061", () => {
  expect(valid.validatePhoneNum("13425121061")).toBe(true);
});

test("valid 13425121061", () => {
  expect(valid.validatePhoneNum("13425121061")).toBe(true);
});
