context('Cy Server Randomness', () => {
  beforeEach(() => {
    cy.visit('https://hub.docker.com/_/php?tab=tags')
  })

  it('something', () => {
    cy.server();
    cy.route("get", "https://hub.docker.com/api/content/v1/products/images/php", "fixture:php.json")
      .as('dockerPhp');

    cy.get('[data-testid=productHeader_productName]').should('contain', "php-mocked");
  });
});
