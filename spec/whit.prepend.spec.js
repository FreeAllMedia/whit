import View from "../";

describe("view.prepend([newAttributes])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should prepend child views when provided views as arguments", () => {
    const childOne = new View({id: 1});
    const childTwo = new View({id: 2});
    const childThree = new View({id: 3});
    view.prepend(childTwo, childThree);
    view.prepend(childOne);

    view.children().should.eql([childOne, childTwo, childThree]);
  });

  it("should prepend child views when provided views as an array", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.prepend([childTwo, childThree]);
    view.prepend([childOne]);
    view.children().should.eql([childOne, childTwo, childThree]);
  });

  it("should prepend each child element", () => {
    const childOne = new View();
    const childTwo = new View();
    const children = [ childOne, childTwo ];
    view.prepend(children);
    const childElements = children.map(child => child.element);
    Array(...view.element.childNodes).should.eql(childElements);
  });

  it("should return self when setting to enable chaining", () => {
    view.prepend(new View()).should.eql(view);
  });
});
