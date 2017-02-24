import View from "../";

describe("view.className([newClassName])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should default to an empty string", () => {
    view.className().should.eql("");
  });

  it("should return self when setting to enable chaining", () => {
    view.className("something").should.eql(view);
  });

  it("should be settable", () => {
    const className = "something";
    view.className(className);
    view.className().should.eql(className);
  });

  it("should be set the elements className", () => {
    const className = "something";
    view.className(className);
    view.element.className.should.eql(className);
  });

  it("should be settable via options", () => {
    const className = "something";
    view = new View({
      className: className
    });
    view.className().should.eql(className);
  });

  it("should set the elements className via options", () => {
    const className = "something";
    view = new View({
      className: className
    });
    view.element.getAttribute("class").should.eql(className);
  });
});
