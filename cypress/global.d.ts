declare namespace Cypress {
  interface Chainable {
    getByDataTestAttribute(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;
    loginByAuth0Api(username: string, password: string): Chainable<any>;
    logoutByAuth0Api(): Chainable<any>;
  }
}
