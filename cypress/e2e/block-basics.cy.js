import { setupBeforeEach, tearDownAfterEach } from '../support/e2e';
import { changePageTitle, save } from '../helpers';

describe('Blocks Tests', () => {
  beforeEach(setupBeforeEach);
  afterEach(tearDownAfterEach);

  it('Add Block: Empty', () => {
    // Change page title
    changePageTitle('My Add-on Page');
    // Add block

    cy.get('.block.inner.text').type('My Add-on Page');

    // Save
    save('/cypress/my-page');
    // then the page view should contain our changes
    cy.contains('My Add-on Page');
  });
});
