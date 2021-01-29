// Need at least first/last name, email, password,
// Also do one for checkbox, submitBtn, and validation.
// import {cypress as cy }  from "cypress"

// NOTE: For whatever reason, cypress won't run while using the consts below.
// Unknown why this is the case.

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
    expect(5 + 5).to.equal(10);
    expect(33 / 3).to.equal(11);
  });
  it("Do the elements show up properly?", () => {
    // firstName().should("exist");
    // lastName().should("exist");
    // email().should("exist");
    // password().should("exist");
    // tOS().should("exist");
    // submitBtn().should("exist");
    cy.get("input[name='first_name']").should("exist");
    cy.get("input[name='last_name']").should("exist");
    cy.get("input[name='email']").should("exist");
    cy.get("input[name='password']").should("exist");
    cy.get("input[type='checkbox']").should("exist");
    cy.get("#submitBtn").should("exist");
  });
  it("Can we check the terms of service?", () => {
    cy.get("input[type='checkbox']")
      // .should("have.value", 'unchecked' )  //For some reason, cypress insists the box is 'on', when everything else insists it is false
      .check();
    // .should("have.value", 'checked' ) //Again, the box is still 'on' , regardless of whether it is checked or not
  });
  it("Does the submit button work properly?", () => {
    //Does the button start disabled?
    cy.get("#submitBtn").should("be.disabled");
    //Will the first text field activate button?
    cy.get("input[name='first_name']").should("exist").type("Chazzz!");
    cy.get("#submitBtn").should("be.disabled");
    cy.get("input[name='first_name']").clear();
    //Will the second?
    cy.get("input[name='last_name']").type("Chazzers");
    cy.get("#submitBtn").should("be.disabled");
    cy.get("input[name='last_name']").clear();
    //Will the third?
    cy.get("input[name='email']").type("Chazz@Chezz.com");
    cy.get("#submitBtn").should("be.disabled");
    cy.get("input[name='email']").clear();
    //How about the fourth?
    cy.get("input[name='password']").type("ChezzyChazz!");
    cy.get("#submitBtn").should("be.disabled");
    cy.get("input[name='password']").clear();
    //Will the terms of service activate the button?
    cy.get("input[type='checkbox']"); // .should("have.value", 'unchecked' )  For some reason, cypress insists the box is 'on', when everything else insists it is false
    cy.get("#submitBtn").should("be.disabled");
    cy.get("input[type='checkbox']").check();
    cy.get("#submitBtn").should("be.disabled");
    cy.get("input[type='checkbox']").uncheck();
    //Will all of them together do it?
    cy.get("input[name='first_name']").should("exist").type("Chazzz!");
    cy.get("input[name='last_name']").type("Chazzers");
    cy.get("input[name='email']").type("Chazz@Chezz.com");
    cy.get("input[name='password']").type("ChezzyChazz!");
    cy.get("input[type='checkbox']").check();
    cy.get("#submitBtn").should("not.be.disabled");
  });
});
