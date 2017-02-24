import View from "../../lib/whit/whit.js";

describe("view.attributes([newAttributes])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should set attributes with an attributes object provided", () => {
    const attributes = {
      class: "something",
      type: "text"
    };
    view.attributes(attributes);

    const actualAttributes = {
      class: view.element.getAttribute("class"),
      type: view.element.getAttribute("type")
    };

    actualAttributes.should.eql(attributes);
  });

  it("should get attributes with nothing provided", () => {
    const attributes = {
      class: "something",
      type: "text"
    };
    view.attributes(attributes);
    view.attributes().should.eql(attributes);
  });

  it("should return self when setting to enable chaining", () => {
    view.attributes({}).should.eql(view);
  });

  it("should be settable via options", () => {
    const attributes = {
      class: "something",
      type: "text"
    };
    view = new View({ attributes });
    view.attributes().should.eql(attributes);
  });
});
