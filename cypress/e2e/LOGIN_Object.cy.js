import Login from "./PageObject/login";

describe("Assertion Login", () => {
  const login = new Login();
  const email = "rosyury62@gmail.com";
  const password = "Tarakan";

  it("should navigate to the sign-in page", () => {
    // open https://amazon.com/
    cy.visit("https://www.amazon.com/");
    cy.viewport(1280, 800);
    cy.location("protocol").should("eq", "https:");
    cy.title().should("eq", "Amazon.com. Spend less. Smile more.");

    // assertion page sign in
    // cy.url().should("include", "/ap/signin");
    login.btnLogin().should("be.visible").click();

    // create email
    login.email().type(email).should("have.value", email).click();
    //cy.get(".a-button-inner > #continue").click();

    //enter button "Submit Email"

    login.clickbtnEmail().should("be.visible").click();

    // enter password
    login.password().type(password).should("have.value", password).click();

    //enter button "Submit"
    login.clickbtnLogin().should("be.visible").click();
  });
});
