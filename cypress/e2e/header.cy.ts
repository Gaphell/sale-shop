describe("Header Component Tests", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false }); // Visit the homepage or any page where the header is used
  });

  it("should render the header correctly", () => {
    // Check for logo
    cy.get("header").find("img").should("have.attr", "alt", "Sale-Shop Logo");

    // Check for navigation links
    cy.get("nav").find("a").should("have.length", 2); // Should have two links: Home and Products

    // Check that the theme switcher is visible
    cy.get('[aria-label="Theme Switcher"]').should("be.visible");
  });

  it("should toggle mobile menu on click", () => {
    // Click the mobile menu button
    cy.get('button[aria-label="Open menu"]').click();

    // Assert that the mobile menu is visible
    cy.get(".md:hidden").should("be.visible");

    // Click the close button inside the mobile menu
    cy.get('button[aria-label="Close menu"]').click();

    // Assert that the mobile menu is hidden
    cy.get(".md:hidden").should("not.be.visible");
  });

  it("should navigate to correct pages on link click", () => {
    // Click the "Home" link
    cy.get('a[href="/"]').click();
    cy.url().should("include", "/"); // Assert we're on the home page

    // Click the "Products" link
    cy.get('a[href="/en/products"]').click(); // Adjust for the locale
    cy.url().should("include", "/en/products");
  });

  it("should apply sticky header with shadow on scroll", () => {
    // Assert no shadow initially
    cy.get("header").should("not.have.class", "shadow-md");

    // Scroll down the page
    cy.scrollTo(0, 200);

    // Assert that the shadow is applied when scrolling
    cy.get("header").should("have.class", "shadow-md");

    // Scroll back to the top
    cy.scrollTo(0, 0);

    // Assert no shadow again
    cy.get("header").should("not.have.class", "shadow-md");
  });

  it("should switch between light and dark themes", () => {
    // Check if body has the dark class initially
    cy.get("body").should("not.have.class", "dark"); // assuming light mode by default

    // Toggle the theme via the theme switcher button
    cy.get('[aria-label="Theme Switcher"]').click();

    // Assert that the body now has the dark class
    cy.get("body").should("have.class", "dark");

    // Toggle back to light mode
    cy.get('[aria-label="Theme Switcher"]').click();

    // Assert that the body has the light class (no 'dark' class)
    cy.get("body").should("not.have.class", "dark");
  });
});
