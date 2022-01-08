import "./commands";
import "@percy/cypress";

export const percySnapshot = (name) => {
  cy.percySnapshot(name, { widths: [375, 1792] });
};
