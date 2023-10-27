describe("Add 3 Games to Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("https://gamehub-wp-ca.netlify.app/psn-list.html");
  });

  it("should add first, second and last games to the cart, go to cart page, and verify item count", () => {
    // Add the first game to the cart
    cy.get(".game-cards:first").as("firstGame");
    cy.get("@firstGame").find(".add-to-cart").click();
    // Add the second game to the cart
    cy.get(".game-cards:eq(1)").as("secondGame");
    cy.get("@secondGame").find(".add-to-cart").click();
    // Add the last game to the cart
    cy.get(".game-cards:last").as("lastGame");
    cy.get("@lastGame").find(".add-to-cart").click();

    // Go to the cart page
    cy.get("a[aria-label='Open shopping cart']").click();

    // Verify that all 3 games have a "howmany" value equal to 1
    cy.get(".howmany").each((element) => {
      cy.wrap(element).should("have.value", "1");
    });

    // Verify that there are 3 items in the cart
    cy.get(".cart-total__quantity").should("contain", "3 items");
  });
});
