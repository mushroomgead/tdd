const removeSNames = require("./app");

describe("removeSNames", () => {
  it("should remove all s name", () => {
    const names = ["Apple", "Strawberry", "Star fruit"];
    expect(removeSNames(names)).not.toContain("Strawberry");
    expect(removeSNames(names)).not.toContain("Star fruit");
  });

  it("should not remove other name", () => {
    const names = ["Apple", "Strawberry", "Star fruit", "Pine Apple"];
    expect(removeSNames(names)).toContain("Apple");
    expect(removeSNames(names)).toContain("Pine Apple");
  });
});
