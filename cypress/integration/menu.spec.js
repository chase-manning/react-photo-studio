describe("Page", () => {
  it("Should load page", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("Menu", () => {
  it("Should open File", () => {
    cy.get("#file-menu").contains("File");
    cy.get("#export-context-menu").should("not.exist");
    cy.get("#file-menu").click();
    cy.get("#export-context-menu").should("exist");
    cy.get("#export-context-menu").contains("Export");
  });
  it("Should show Export submenu", () => {
    cy.get("#quick-export-as-png-context-menu").should("not.exist");
    cy.get("#export-context-menu").trigger("mouseover");
    cy.get("#quick-export-as-png-context-menu").should("exist");
  });
  it("Should take Percy Snapshot", () => {
    cy.percySnapshot();
  });
  it("Should close menu", () => {
    cy.get("#export-context-menu").should("exist");
    cy.get("#quick-export-as-png-context-menu").should("exist");
    cy.get("#context-menu-exit").click();
    cy.get("#quick-export-as-png-context-menu").should("not.exist");
    cy.get("#export-context-menu").should("not.exist");
  });
  it("Should have links", () => {
    cy.get("#twitter-link")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href", "https://twitter.com/pso_app");
    cy.get("#facebook-link")
      .should("have.attr", "target", "_blank")
      .should(
        "have.attr",
        "href",
        "https://www.facebook.com/photoshoponline.app.fb"
      );
    cy.get("#instagram-link")
      .should("have.attr", "target", "_blank")
      .should(
        "have.attr",
        "href",
        "https://www.instagram.com/photoshoponline.app/"
      );
    cy.get("#github-link")
      .should("have.attr", "target", "_blank")
      .should(
        "have.attr",
        "href",
        "https://github.com/chase-manning/photoshop-online"
      );
  });
});
