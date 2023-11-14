class Login {
  btnLogin() {
    return cy.get(".nav-line-1-container");
  }
  email() {
    return cy.get("#ap_email");
  }
  clickbtnEmail() {
    return cy.get(".a-button-inner > #continue");
  }

  password() {
    return cy.get("#ap_password");
  }
  clickbtnLogin() {
    return cy.get("#signInSubmit");
  }
}
export default Login;
