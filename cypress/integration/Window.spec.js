describe("Window", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have correct title", () => {
    cy.title().should("equal", "QHacks | Queen's University | Winter 2019");
  });
});
