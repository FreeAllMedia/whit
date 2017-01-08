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
    view.on("click", someHandler);
    view.trigger("click");
    someHandler.called.should.be.true;
  });

  it("should set event handler arguments on the element", () => {
    const someHandler = sinon.spy();
    view.on("click", someHandler);
    view.trigger("click", 1, 2, 3);
    someHandler.calledWith(view, new Event("click"), 1, 2, 3).should.be.true;
  });

  it("should clear event handler arguments on the element", () => {
    const someHandler = sinon.spy();
    view.on("focus", someHandler);
    view.trigger("click", 1, 2, 3);
    const event = new Event("focus");
    view.element.dispatchEvent(event);
    someHandler.firstCall.args.should.eql([view, event]);
  });
});
