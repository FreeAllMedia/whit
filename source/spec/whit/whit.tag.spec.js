import View from "../../lib/whit/whit.js";

describe("view.tag", () => {
  let view,
      options;

  beforeEach(() => {
    options = {
      tag: "article"
    };
    view = new View(options);
  });

  it("should be read-only", () => {
    (() => {
      view.tag = [];
    }).should.throw();
  });

  it("should default to 'div'", () => {
    view = new View();
    view.tag.should.eql("div");
  });

  it("should get set via options", () => {
    view.tag.should.eql(options.tag);
  });

  it("should be overridable by sub-classes", () => {
    class Article extends View {
      get tag() { return "article"; }
    }

    view = new Article();
    view.tag.should.eql("article");
  });
});
