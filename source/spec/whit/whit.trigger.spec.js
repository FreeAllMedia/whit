import View from "../../lib/whit/whit.js";

describe("view.trigger(eventName)", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should return self when setting to enable chaining", () => {
    view.trigger("click").should.eql(view);
  });

  it("should set an event handler on the element", () => {
    const someHandler = sinon.spy();
    view.element.addEventListener("click", someHandler);
    view.trigger("click");
    someHandler.called.should.be.true;
  });
});
