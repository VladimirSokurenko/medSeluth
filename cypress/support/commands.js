Cypress.Commands.add('verifyPartialText', (elemen, text) => {
    cy.get(elemen).then(el => {
      assert.include(el.text(), text);
    });
  });