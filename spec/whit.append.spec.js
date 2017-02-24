import View from "../";

describe("view.append([newAttributes])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should append child views when provided views as arguments", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.append(childOne);
    view.append(childTwo, childThree);
    view.children().should.eql([childOne, childTwo, childThree]);
  });

  it("should replace child views when provided views as an array", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.append([childOne]);
    view.append([childTwo, childThree]);
    view.children().should.eql([childOne, childTwo, childThree]);
  });

  it("should append each child element", () => {
    const childOne = new View();
    const childTwo = new View();
    const children = [ childOne, childTwo ];
    view.append(children);
    const childElements = children.map(child => child.element);
    Array(...view.element.childNodes).should.eql(childElements);
  });

  it("should return self when setting to enable chaining", () => {
    view.append(new View()).should.eql(view);
  });
});
