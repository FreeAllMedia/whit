import View from "../";

describe("viewA.forwardChildrenTo(view)", () => {
  let viewA,
      viewB,
      viewC,
      viewD;

  beforeEach(() => {
    viewA = new View();
    viewB = new View();
    viewC = new View();
    viewD = new View();

    viewA.forwardChildrenTo(viewB);
  });

  it("should return self when setting to enable chaining", () => {
    viewA.forwardChildrenTo(viewB).should.eql(viewA);
  });

  it("should forward appended children to provided view", () => {
    viewA.append(viewC, viewD);
    viewB.children().should.eql([viewC, viewD]);
  });

  it("should forward children to provided view", () => {
    viewA.children(viewC, viewD);
    viewB.children().should.eql([viewC, viewD]);
  });

  it("should be settable via options", () => {
    viewA = new View({ forwardChildrenTo: viewB });
    viewA.append(viewC, viewD);
    viewB.children().should.eql([viewC, viewD]);
  });
});
