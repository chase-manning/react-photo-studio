describe("Page", () => {
  it("Should load page", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("Brush Tool", () => {
  it("Should draw line", () => {
    cy.get("#brush-event-handler").trigger("mousemove", {
      clientX: 700,
      clientY: 400,
    });
    cy.get("#brush-event-handler").trigger("mousedown");
    cy.get("#brush-event-handler").trigger("mousemove", {
      clientX: 800,
      clientY: 500,
    });
    cy.get("#brush-event-handler").trigger("mouseup");
  });
  it("Should take Percy Snapshot", () => {
    percySnapshot("Brush tool drawing");
  });
});

describe("Color Tool", () => {
  it("Should have default colors", () => {
    cy.get("#color-tool-primary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 0, 0)");
    cy.get("#color-tool-secondary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");
  });
  it("Should have default colors", () => {
    cy.get("#color-tool-primary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 0, 0)");
    cy.get("#color-tool-secondary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");
  });
  it("Should swap colors", () => {
    cy.get("#color-tool-swap").click();
    cy.get("#color-tool-primary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");
    cy.get("#color-tool-secondary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 0, 0)");
  });
  it("Should set default colors", () => {
    cy.get("#color-tool-default").click();
    cy.get("#color-tool-primary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 0, 0)");
    cy.get("#color-tool-secondary-square")
      .should("have.css", "background-color")
      .and("eq", "rgb(255, 255, 255)");
  });
});
