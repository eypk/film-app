describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/").contains("Film App");
    cy.get('[data-test="navbarLoginBtn"]')
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/login");
    cy.get("#email").type("johndoe@email.com");
    cy.get("#password").type("johndoe@email.com");
    cy.get('[data-test="loginLoginBtn"]').click({ force: true });
    cy.url().should("include", "/");
    cy.get('[data-test="navbarLogoutBtn"]', { timeout: 10000 });
  });
});
