import getDob from "@/helpers/getDob";

describe("getDob helpers", () => {
  it("should run properly when date 1 digit", () => {
    const input = "2011-10-05T14:48:00.000Z";
    const expected = "05-10-2011";
    const actual = getDob(input);
    expect(actual).toStrictEqual(expected);
  });

  it("should run properly when date 2 digit", () => {
    const input = "2011-10-15T14:48:00.000Z";
    const expected = "15-10-2011";
    const actual = getDob(input);
    expect(actual).toStrictEqual(expected);
  });
});
