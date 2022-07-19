Cypress.Commands.add("getByDataTestAttribute", (dataTestAttribute, ...args) => {
  return cy.get(`[data-cy=${dataTestAttribute}]`, ...args);
});
