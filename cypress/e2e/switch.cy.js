describe("navbar switdh", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/").contains("Film App");
    cy.get('[data-test="navbarSwitchBtn"]')
      .should("be.visible")
      .click({ force: true });

    cy.get("html").should(($html) => {
      const className = $html.attr("class");
      expect(className === "dark" || className === "").to.be.true;
    });

    cy.get('[data-test="navbarSwitchBtn"]')
      .should("be.visible")
      .click({ force: true });
  });
});
