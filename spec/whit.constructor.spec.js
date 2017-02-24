import View from "../";

describe("View()", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should instantiate without throwing an error", () => {
    view.should.be.instanceOf(View);
  });
});
