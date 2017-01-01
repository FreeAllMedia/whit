import View from "../../lib/whit/whit.js";

describe("View()", () => {
  let view,
      options;

  class SubView extends View {
    initialize(initializeOptions) {
      this.options = initializeOptions;
    }
  }

  beforeEach(() => {
    options = {
      tag: "ol"
    };
    view = new SubView(options);
  });

  it("should call .initialize with the options provided to the constructor", () => {
    view.options.should.eql(options);
  });
});
