import View from "../../lib/whit/whit.js";

describe("view.attribute([newContents])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should set an attribute with an attribute name and value provided", () => {
    const className = "something";
    view.attribute("class", className);
    view.element.getAttribute("class").should.eql(className);
  });

  it("should get an attribute with an attribute name provided", () => {
    const className = "something";
    view.attribute("class", className);
    view.attribute("class").should.eql(className);
  });

  it("should return self when setting to enable chaining", () => {
    view.attribute("class", "something").should.eql(view);
  });
  //
  // it("should be settable", () => {
  //   const attribute = "Hello, Bob.";
  //   view.attribute(attribute);
  //   view.attribute().should.eql(attribute);
  // });
  //
  // it("should be set the elements innerHTML", () => {
  //   const attribute = "Hello, Bob.";
  //   view.attribute(attribute);
  //   view.element.innerHTML.should.eql(attribute);
  // });
  //
  // it("should be settable via options", () => {
  //   const attribute = "Hello, Bob.";
  //   view = new View({
  //     attribute: attribute
  //   });
  //   view.attribute().should.eql(attribute);
  // });
});
