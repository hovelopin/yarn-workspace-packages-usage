import { isArray } from ".";

it("isArray function allows array type", () => {
  const arr = [1, 2, 3];
  expect(isArray(arr)).toBe(true);
});

it("isArray function disallows except for the array type", () => {
  const num: number = 3;
  expect(isArray(num)).toBe(false);
});
