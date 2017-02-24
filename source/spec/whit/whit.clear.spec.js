import View from "../../lib/whit/whit.js";

describe("view.clear([newAttributes])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should remove all children from the element", () => {
    const childOne = new View();
    const childTwo = new View();
    const children = [ childOne, childTwo ];
    view.children(children);
    view.clear();
    Array(...view.element.childNodes).should.eql([]);
  });

  it("should remove all child views", () => {
    const childOne = new View();
    const childTwo = new View();
    const children = [ childOne, childTwo ];
    view.children(children);
    view.clear();
    view.children().should.eql([]);
  });
});
