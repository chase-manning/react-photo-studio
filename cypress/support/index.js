import "./commands";
import "@percy/cypress";

export const percySnapshot = (name) => {
  cy.percySnapshot(name, { widths: [1792] });
};
