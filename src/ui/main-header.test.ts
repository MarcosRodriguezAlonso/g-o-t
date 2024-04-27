import { getMainHeader } from "./main-header.js";

describe("Given the getMainHeader function", () => {
  describe("When is called", () => {
    test("Then it should return a heading with 'Game of Thrones'", () => {
      const titleText = "Game of Thrones";
      const header = getMainHeader(titleText);

      expect(header.innerHTML).toBe(`<h1>${titleText}</h1>`);
    });
  });
});
