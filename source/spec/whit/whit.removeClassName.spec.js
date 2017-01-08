import View from "../../lib/whit/whit.js";

describe("view.removeClassName([newClassName])", () => {
  let view,
      options;

  beforeEach(() => {
    options = {
      className: "hello world"
    };
    view = new View(options);
  });

  it("should do nothing when called without a class name", () => {
    view.removeClassName();
    view.className().should.eql(options.className);
  });

  it("should return self when setting to enable chaining", () => {
    view.removeClassName("world").should.eql(view);
  });

  it("should be set the elements className", () => {
    view.removeClassName("world");
    view.element.className.should.eql("hello");
  });
});
