import View from "../../lib/whit/whit.js";

describe("viewA.forwardEventsTo([view])", () => {
  let viewA,
      viewB,
      handler,
      event;

  beforeEach(() => {
    viewA = new View();
    viewB = new View();
    handler = sinon.spy();

    const eventName = "click";
    event = new Event(eventName);

    viewA.forwardEventsTo(viewB);
    viewA.on(eventName, handler);
    viewA.trigger(eventName);
  });

  it("should return self when setting to enable chaining", () => {
    viewA.forwardEventsTo(viewB).should.eql(viewA);
  });

  it("should forward events to provided view", () => {
    handler.called.should.be.true;
  });

  it("should callback with the view being forwarded to, and the event as arguments", () => {
    handler.calledWith(viewB, event).should.be.true;
  });


  it("should be settable via options", () => {
    viewA = new View({ forwardEventsTo: viewB });
    handler = sinon.spy();
    viewA.on("click", handler);
    viewB.trigger("click");
    handler.calledWith(viewB, event).should.be.true;
  });
});
