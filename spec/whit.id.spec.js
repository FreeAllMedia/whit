import View from "../";

describe("view.id([newId])", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should default to an empty string", () => {
    view.id().should.eql("");
  });

  it("should return self when setting to enable chaining", () => {
    view.id("something").should.eql(view);
  });

  it("should be settable", () => {
    const id = "something";
    view.id(id);
    view.id().should.eql(id);
  });

  it("should be set the elements id", () => {
    const id = "something";
    view.id(id);
    view.element.id.should.eql(id);
  });

  it("should be settable via options", () => {
    const id = "something";
    view = new View({
      id: id
    });
    view.id().should.eql(id);
  });
});
