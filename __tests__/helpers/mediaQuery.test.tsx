import mediaQuery from "@/helpers/mediaQuery";

describe("mediaQuery helpers", () => {
  it("should run properly", () => {
    const input = 768;
    const expected = "@media(min-width: 768px)";
    const actual = mediaQuery(input);
    expect(actual).toStrictEqual(expected);
  });
});
