import View from "../";

describe("view.appendClassName([newClassName])", () => {
  let view,
      options;

  beforeEach(() => {
    options = {
      className: "hello"
    };
    view = new View(options);
  });

  it("should do nothing when called without a class name", () => {
    view.appendClassName();
    view.className().should.eql("hello");
  });

  it("should do nothing when called with an existing class name", () => {
    view
      .appendClassName("world")
      .appendClassName("world");
    view.className().should.eql("hello world");
  });

  it("should return self when setting to enable chaining", () => {
    view.appendClassName("something").should.eql(view);
  });

  it("should be set the elements className", () => {
    const className = "something";
    view.appendClassName(className);
    view.element.className.should.eql(`${options.className} ${className}`);
  });
});
