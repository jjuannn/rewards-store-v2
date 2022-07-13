describe("test app", () => {
  before(() => {
    cy.viewport(1920, 1080);
  });

  it("visit google", () => {
    cy.visit("https://google.com/");
    console.log(Cypress.env("NEXT_PUBLIC_API_TOKEN"));

    expect(true).equals(true);
  });
});
