import View from "../";

describe("view.contents([newContents])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should default to an empty string", () => {
    view.contents().should.eql("");
  });

  it("should return self when setting to enable chaining", () => {
    view.contents("Setting").should.eql(view);
  });

  it("should be settable", () => {
    const contents = "Hello, Bob.";
    view.contents(contents);
    view.contents().should.eql(contents);
  });

  it("should be set the elements innerHTML", () => {
    const contents = "Hello, Bob.";
    view.contents(contents);
    view.element.innerHTML.should.eql(contents);
  });

  it("should be settable via options", () => {
    const contents = "Hello, Bob.";
    view = new View({
      contents: contents
    });
    view.contents().should.eql(contents);
  });
});
