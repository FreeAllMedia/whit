import View from "../";

describe("view.replace(...newChildren)", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should replace child views when provided views as arguments", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.replace(childOne);
    view.replace(childTwo, childThree);
    view.children().should.eql([childTwo, childThree]);
  });

  it("should replace child views when provided views as an array", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.replace([childOne]);
    view.replace([childTwo, childThree]);
    view.children().should.eql([childTwo, childThree]);
  });

  it("should clear children with nothing provided", () => {
    const childOne = new View();
    const childTwo = new View();
    view.children(childOne, childTwo);
    view.replace();
    view.children().should.eql([]);
  });

  it("should replace child elements", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.replace([childOne]);
    view.replace([childTwo, childThree]);
    const childElements = [childTwo, childThree].map(child => child.element);
    Array(...view.element.childNodes).should.eql(childElements);
  });

  it("should return self when setting to enable chaining", () => {
    view.replace(new View()).should.eql(view);
  });

  it("should return self when clearing to enable chaining", () => {
    view.replace().should.eql(view);
  });
});
