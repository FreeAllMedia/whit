import View from "../";

describe("view.element", () => {
  let view;

  beforeEach(() => {
    view = new View();
  });

  it("should be settable", () => {
    const element = document.createElement("p");
    view.element = element;
    view.element.should.eql(element);
  });

  it("should default to a new element of the designated tag type", () => {
    const options = {
      tag: "article"
    };
    view = new View(options);

    view.element.tagName.should.eql(options.tag.toUpperCase());
  });

  it("should get set via options", () => {
    const element = document.createElement("p");
    view = new View({
      element: element
    });
    view.element.should.eql(element);
  });

  it("should get the tag type overridden by sub-classes", () => {
    class Article extends View {
      get tag() { return "article"; }
    }

    view = new Article();
    view.element.tagName.should.eql("ARTICLE");
  });
});
