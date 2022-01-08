import "./commands";
import "@percy/cypress";

export const percySnapshot = (name) => {
  cy.wait(1000);
  cy.percySnapshot(name, { widths: [1792] });
};
