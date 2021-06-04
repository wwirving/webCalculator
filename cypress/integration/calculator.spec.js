describe("My first test", () => {
  it("Should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
  });

  it("Should contain 0", () => {
    cy.get(".calculator__cell--0").contains("0");
  });
});

describe("Addition operator", () => {
  it("5+5 should equal 10", () => {
    cy.get(".calculator__cell--5").click();
    cy.get(".calculator__cell--plus").click();
    cy.get(".calculator__cell--5").click();
    cy.get(".calculator__cell--equals").click();
    cy.get(".calculator__cell--screen").contains("5 + 5 = 10");
    cy.get(".calculator__cell--screen").click();
  });
});

describe("Subtract operator", () => {
  it("20 - 13 should equal 10", () => {
    cy.get(".calculator__cell--2").click();
    cy.get(".calculator__cell--0").click();
    cy.get(".calculator__cell--minus").click();
    cy.get(".calculator__cell--1").click();
    cy.get(".calculator__cell--3").click();
    cy.get(".calculator__cell--equals").click();
    cy.get(".calculator__cell--screen").contains("20 - 13 = 7");
    cy.get(".calculator__cell--screen").click();
  });
});

describe("Coloured backdrop", () => {
  it("starts with a blue background", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    cy.get(".calculator").should(
      "have.css",
      "background-color",
      "rgb(69, 154, 209)"
    );
  });
  it("changes to a pink background on click", () => {
    cy.get(".calculator").click();
    cy.get(".calculator").should(
      "have.css",
      "background-color",
      "rgb(241, 123, 145)"
    );
  });
  it("changes to a green background on next click", () => {
    cy.get(".calculator").click();
    cy.get(".calculator").should(
      "have.css",
      "background-color",
      "rgb(110, 182, 106)"
    );
  });
  it("changes to a yellow background on penultimate click", () => {
    cy.get(".calculator").click();
    cy.get(".calculator").should(
      "have.css",
      "background-color",
      "rgb(254, 222, 14)"
    );
  });
  it("changes back to a blue background on next click", () => {
    cy.get(".calculator").click();
    cy.get(".calculator").should(
      "have.css",
      "background-color",
      "rgb(69, 154, 209)"
    );
  });
});

describe("Info hover interaction", () => {
  it("starts with a white matt background", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    cy.wait(5000);
    cy.get(".readout").should("have.css", "opacity", "1");
    cy.get(".readout").should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
  });
  it("becomes opaque on hover", () => {
    cy.visit("http://127.0.0.1:5502/index.html");
    cy.wait(5000);
    cy.get(".readout")
      .trigger("mouseover")
      .should("have.css", "opacity", "0.8");
  });
});
