import View from "../../lib/whit/whit.js";

describe("view.toString()", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should return the element as a string", () => {
    view.toString().should.eql("<div></div>");
  });

  xit("should return the element's attributes as a string", () => {
    view.attribute("id", "something");
    view.toString().should.eql("<div id=\"something\" />");
  });
});
