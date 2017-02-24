import View from "../../lib/whit/whit.js";

describe("view.forwardEventsTo(...views)", () => {
  let viewA,
      viewB,
      viewC,
      handler,
      event;

  beforeEach(() => {
    viewA = new View();
    viewB = new View();
    viewC = new View();
    handler = sinon.spy();

    const eventName = "click";
    event = new CustomEvent(eventName);
    console.log(event);

    viewA.forwardEventsTo(viewB, viewC);
    viewA.on(eventName, handler);
    viewA.trigger(eventName);
  });

  it("should return self when setting to enable chaining", () => {
    viewA.forwardEventsTo(viewB).should.eql(viewA);
  });

  it("should forward events to provided view", () => {
    handler.called.should.be.true;
  });

  it("should callback with the views being forwarded to, and the event as arguments", () => {
    [
      handler.firstCall.args[0] === viewB,
      handler.firstCall.args[1].type === event.type,
      handler.secondCall.args[0] === viewC,
      handler.secondCall.args[1].type === event.type
    ].should.eql([ true, true, true, true ]);
  });

  it("should be settable via options", () => {
    viewA = new View({ forwardEventsTo: [ viewB, viewC ] });
    handler = sinon.spy();
    viewA.on("click", handler);
    viewA.trigger("click");
    [
      handler.firstCall.args[0] === viewB,
      handler.firstCall.args[1].type === event.type,
      handler.secondCall.args[0] === viewC,
      handler.secondCall.args[1].type === event.type
    ].should.eql([ true, true, true, true ]);
  });
});
