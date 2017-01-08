import View from "../../lib/whit/whit.js";

describe("view.on('mount', callback)", () => {
  let parent,
      child;

  class Image extends View {}

  beforeEach(() => {
    parent = new View();
    child = new Image();

    child.on("mount", (self, event, mountedTo) => {
      child.mountCalled = mountedTo;
    });
  });

  it("should trigger the 'mount' event when appended to a parent", () => {
    parent.append(child);
    child.mountCalled.should.eql(parent);
  });

  it("should trigger the 'mount' event when replacing a parent's content", () => {
    parent.replace(child);
    child.mountCalled.should.eql(parent);
  });

  it("should trigger the 'mount' event when appended to a parent", () => {
    parent.append(child);
    child.mountCalled.should.eql(parent);
  });
});
