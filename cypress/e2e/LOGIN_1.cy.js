describe("Sign in", () => {
  const email = "rosyury62@gmail.com";
  const password = "Tarakan";

  it("should navigate to the sign-in page", () => {
    // open https://amazon.com/
    cy.visit("https://www.amazon.com/");
    cy.viewport(1280, 800);
    cy.location("protocol").should("eq", "https:");
    cy.title().should("eq", "Amazon.com. Spend less. Smile more.");

    // open registration form
    cy.get(".nav-line-1-container").should("be.visible").click();

    // assertion page sign in
    cy.url().should("include", "/ap/signin");

    // create email
    cy.get("#ap_email").type(email).should("have.value", email);

    cy.get(".a-button-inner > #continue").click();
    // enter password
    cy.get("#ap_password").type("Tarakan").should("have.value", password);
    cy.get("#signInSubmit").click();
  });
});
