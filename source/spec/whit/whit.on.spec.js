import View from "../../lib/whit/whit.js";

describe("view.on(eventName, eventHandler)", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should return self when setting to enable chaining", () => {
    view.on("click", () => {}).should.eql(view);
  });

  it("should set an event handler on the element", () => {
    const someHandler = sinon.spy();
    view.on("click", someHandler);
    const event = new Event("click");
    view.element.dispatchEvent(event);
    someHandler.called.should.be.true;
  });

  it("should be settable via options", () => {
    const on = {
      click: sinon.spy()
    };
    view = new View({ on });
    view.trigger("click");
    on.click.called.should.be.true;
  });
});
