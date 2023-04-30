describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/").contains("Film App");
    cy.get('[data-test="navbarRegisterBtn"]')
      .should("be.visible")
      .click({ force: true });
    cy.url().should("include", "/register");

    //register starts

    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#email").type("johndoe@email.com");
    cy.get("#password").type("johndoe@email.com");
    cy.get('[data-test="registerBtn"]').click({ force: true });

    cy.get('[data-test="navbarLogoutBtn"]', { timeout: 10000 })
      .should("be.visible")
      .click({
        force: true,
      });
    cy.url().should("include", "/");
    cy.get('[data-test="navbarRegisterBtn"]');
  });
});
