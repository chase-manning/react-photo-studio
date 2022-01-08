describe("Page", () => {
  it("Should load page", async () => {
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
  it("Should close menu", () => {
    cy.get("#export-context-menu").should("exist");
    cy.get("#quick-export-as-png-context-menu").should("exist");
    cy.get("#context-menu-exit").click();
    cy.get("#quick-export-as-png-context-menu").should("not.exist");
    cy.get("#export-context-menu").should("not.exist");
  });
});
