import apiNormalizer from "@/helpers/apiNormalizer";
import type { IDriverRes, IDriverInfo } from "@/types/driver";
import MOCK_DRIVER from "../../__mocks_data__/driver";

describe("apiNormalizer helpers", () => {
  it("should run properly when input available", () => {
    const input = MOCK_DRIVER;
    const expected = [
      {
        dob: "25-04-1964",
        email: "krista.krause@example.com",
        firstName: "Krista",
        id: "",
        img: "https://randomuser.me/api/portraits/med/women/57.jpg",
        lastName: "Krause",
        phone: "0733-5152203",
      },
    ];
    const actual = apiNormalizer(input);
    expect(actual).toStrictEqual(expected);
  });

  it("should run properly when input undefined", () => {
    const input = undefined;
    const expected = [] as unknown as IDriverInfo;
    const actual = apiNormalizer(input);
    expect(actual).toStrictEqual(expected);
  });

  it("should run properly when input empty results", () => {
    const input = { results: [{}] } as IDriverRes;
    const expected = [
      {
        dob: "NaN-NaN-NaN",
        email: "",
        firstName: "",
        id: "",
        img: "",
        lastName: "",
        phone: "",
      },
    ];
    const actual = apiNormalizer(input);
    expect(actual).toStrictEqual(expected);
  });
});
