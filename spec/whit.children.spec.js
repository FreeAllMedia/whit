import View from "../";

describe("view.children([newAttributes])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should replace child views when provided views as arguments", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.children(childOne);
    view.children(childTwo, childThree);
    view.children().should.eql([childTwo, childThree]);
  });

  it("should replace child views when provided views as an array", () => {
    const childOne = new View();
    const childTwo = new View();
    const childThree = new View();
    view.children([childOne]);
    view.children([childTwo, childThree]);
    view.children().should.eql([childTwo, childThree]);
  });

  it("should get children with nothing provided", () => {
    const childOne = new View();
    const childTwo = new View();
    view.children(childOne, childTwo);
    view.children().should.eql([childOne, childTwo]);
  });

  it("should append each child element", () => {
    const childOne = new View();
    const childTwo = new View();
    const children = [ childOne, childTwo ];
    view.children(children);
    const childElements = children.map(child => child.element);
    Array(...view.element.childNodes).should.eql(childElements);
  });

  it("should return self when setting to enable chaining", () => {
    view.children(new View()).should.eql(view);
  });

  it("should be settable via options", () => {
    const childOne = new View();
    const childTwo = new View();

    const children = [ childOne, childTwo ];

    view = new View({ children });

    view.children().should.eql(children);
  });
});
