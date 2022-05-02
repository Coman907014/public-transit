import chaiInViewport from 'chai-in-viewport'

chai.use(chaiInViewport);


before(() => {
  // Have the debugger closed by default
  cy.window({ log: false }).then((w) => w.localStorage.debug_state = 0);

});
