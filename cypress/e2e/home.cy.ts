describe("Home Page", () => {
  beforeEach(() => {
    // Visit the homepage with a specific locale (e.g., en or dz)
    cy.visit("/en");
  });

  it("should render the MetaHead component with correct meta tags", () => {
    // Check that the page title is correct
    cy.title().should("eq", "Welcome to Sale Shop | Best Deals Online");

    // Check that the page description meta tag is correct
    cy.get('meta[name="description"]').should(
      "have.attr",
      "content",
      "Shop the best deals and offers across various categories. Fast delivery and quality products."
    );
  });

  it("should display the HeroProduct component", () => {
    // Check that the HeroProduct component renders
    cy.get('[data-testid="hero-product"]').should("exist");
  });

  it("should display the ProductCategory component", () => {
    // Check that the ProductCategory component renders
    cy.get('[data-testid="product-category"]').should("exist");
  });

  it("should render the page correctly for different locales", () => {
    // Visit the page for a different locale, e.g., dz
    cy.visit("/de");

    // Check that the page title changes accordingly
    cy.contains("Willkommen im Sale-Shop").should("be.visible");
  });
});
