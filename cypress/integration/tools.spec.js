describe("Page", () => {
  it("Should load page", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("Brush Tool", () => {
  it("Should draw line", () => {
    cy.document().then((doc) => {
      const canvas = doc
        .getElementById("document-canvas")
        .getBoundingClientRect();
      const y = canvas.y;
      const x = canvas.x;
      cy.get("#brush-event-handler").trigger("mousemove", {
        clientX: x + 100,
        clientY: y + 100,
      });
      cy.get("#brush-event-handler").trigger("mousedown");
      cy.get("#brush-event-handler").trigger("mousemove", {
        clientX: x + 200,
        clientY: y + 200,
      });
      cy.get("#brush-event-handler").trigger("mouseup");
    });
  });
  it("Should take Percy Snapshot", () => {
    cy.percySnapshot();
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
