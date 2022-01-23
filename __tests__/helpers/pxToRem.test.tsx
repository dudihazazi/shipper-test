import pxToRem from "@/helpers/pxToRem";

describe("pxToRem helpers", () => {
  it("should run properly", () => {
    const input = 16;
    const expected = "1rem";
    const actual = pxToRem(input);
    expect(actual).toStrictEqual(expected);
  });
});
