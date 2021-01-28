// Need at least first/last name, email, password, 
// Also do one for checkbox, submitBtn, and validation.
// import {cypress as cy }  from "cypress"

describe("User Onboarding app", () => {
    // here go our tests
    beforeEach(() => {
      // arbitrary code you want running before tests start
      cy.visit("http://localhost:3000");
    });

    // const firstName = cy.get("input[name='first_name']")
    // const lastName = cy.get("input[name='last_name']")
    // const email = cy.get("input[name='email']")
    // const password = cy.get("input[name='password']")
    // const tOS = cy.get("input[type='checkbox']")
    // const submitBtn = cy.get("#submitBtn")

    //TEST TIME
it("sanity tests!", () => {
    expect(5+5).to.equal(10)
    expect(33/3).to.equal(11)
});
it("Do the elements show up properly?", () => {
    // firstName().should("exist");
    // lastName().should("exist");
    // email().should("exist");
    // password().should("exist");
    // tOS().should("exist");
    // submitBtn().should("exist");
    cy.get("input[name='first_name']").should('exist')
    cy.get("input[name='last_name']").should('exist')
    cy.get("input[name='email']").should('exist')
    cy.get("input[name='password']").should('exist')
    cy.get("input[type='checkbox']").should('exist')
    cy.get("#submitBtn").should('exist')
})
})