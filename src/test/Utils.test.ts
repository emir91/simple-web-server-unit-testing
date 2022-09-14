import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  test("Upper Case method test", () => {
    const toUpperCase = Utils.toUpperCase("abc");
    const resultStr = "ABC";

    expect(toUpperCase).toBe(resultStr);
  });

  test("Parse Url method test - url without query string", () => {
    const parseUrl = Utils.parseUrl("http://localhost:8080/login");

    expect(parseUrl.protocol).toBe("http:");
    expect(parseUrl.host).toBe("localhost:8080");
    expect(parseUrl.pathname).toBe("/login");
  });

  test("Parse Url method test - url with query string", () => {
    const parseUrl = Utils.parseUrl(
      "http://localhost:8080/login?username=user&password=pass"
    );
    const result = {
      username: "user",
      password: "pass",
    };

    expect(parseUrl.query).toEqual(result);
  });
});
