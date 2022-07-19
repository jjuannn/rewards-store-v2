import products from "../fixtures/products.json";

describe("Rewards Store", () => {
  before(() => {
    cy.intercept("https://coding-challenge-api.aerolab.co/user/me", {
      fixture: "user.json",
    });

    /**
     * same route as home but reading products
     * from .json file instead of making an API call
     * */
    cy.visit("/mockedProducts");
  });

  beforeEach(() => {
    expect(true).equal(true);

    cy.getByDataTestAttribute("footer-link").should(
      "have.attr",
      "href",
      "http://github.com/jjuannn/rewards-store-v2"
    );
  });

  it("Test Header", () => {
    cy.getByDataTestAttribute("header-component").should("be.visible");
    cy.getByDataTestAttribute("points-brand-logo").should("be.visible");
    cy.getByDataTestAttribute("header-brand-logo").should(
      "have.attr",
      "href",
      "/"
    );
    cy.getByDataTestAttribute("points-container").should("be.visible");
    cy.getByDataTestAttribute("user-points").should("be.visible");
    cy.getByDataTestAttribute("collapsible-content").should("not.be.visible");
    cy.getByDataTestAttribute("toggle-collapsible-logo")
      .should("be.visible")
      .click();
    cy.getByDataTestAttribute("collapsible-content").should("be.visible");

    cy.contains("Add Balance").should("be.visible");
    cy.getByDataTestAttribute("aerocard").should("be.visible");

    cy.getByDataTestAttribute("collapsible-points-amount-button-1000")
      .first()
      .should("have.text", "1000");
    cy.getByDataTestAttribute("collapsible-points-amount-button-5000")
      .first()
      .should("have.text", "5000");
    cy.getByDataTestAttribute("collapsible-points-amount-button-7500")
      .first()
      .should("have.text", "7500");
    cy.contains("Add Points").should("be.visible");

    cy.getByDataTestAttribute("presentation-container").click();
    cy.getByDataTestAttribute("collapsible-content").should("not.be.visible");
  });

  it("Test PresentationTitle", () => {
    cy.getByDataTestAttribute("presentation-container")
      .should("have.css", "flex-direction", "row")
      .should("be.visible");

    cy.contains("EXPLORE THE").should("be.visible");
    cy.contains("TECH").should("be.visible");
    cy.contains("ZONE").should("be.visible");
    cy.contains(
      `Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.`
    ).should("be.visible");
    cy.contains("VIEW ALL PRODUCTS").should("be.visible");

    cy.getByDataTestAttribute("presentation-img").should(
      "have.css",
      "background-image"
    );
  });

  it("Test PresentationCards", () => {
    const AMOUNT_OF_CARDS = 3;
    cy.getByDataTestAttribute("presentation-cards")
      .should("have.length", AMOUNT_OF_CARDS)
      .each(($el) => {
        cy.wrap($el).should("be.visible");
      });
    const AMOUNT_OF_DIVIDERS = 2;
    cy.getByDataTestAttribute("section-divider")
      .should("have.length", AMOUNT_OF_DIVIDERS)
      .each(($el) => {
        cy.wrap($el).should("be.visible");
      });
    cy.contains("1 - Browse").should("be.visible");
    cy.contains("2 - Choose").should("be.visible");
    cy.contains("3 - Enjoy").should("be.visible");
    cy.contains(
      "Browse our tech catalog with more than 20 top tech products"
    ).should("be.visible");
    cy.contains(
      "Exchange your hard earned AeroPoints for the item you want"
    ).should("be.visible");
    cy.contains(
      "All done, you can relax! We’ll take care of delivery of your tech item!"
    ).should("be.visible");
  });

  it("Test ProductsCards", () => {
    expect(true).equal(true);
    cy.getByDataTestAttribute("products-tech-text")
      .should("be.visible")
      .should("have.text", "TECH");
    cy.getByDataTestAttribute("products-products-text")
      .should("be.visible")
      .should("have.text", "PRODUCTS");

    /** filters */
    const AMOUNT_OF_FILTERS = 11;
    cy.getByDataTestAttribute("filter-products-container")
      .should("be.visible")
      .children()
      .should("have.length", AMOUNT_OF_FILTERS);

    const AMOUNT_OF_PRODUCTS_PER_PAGE = 16;
    cy.getByDataTestAttribute("product-card").should(
      "have.length",
      AMOUNT_OF_PRODUCTS_PER_PAGE
    );

    cy.getByDataTestAttribute("filter-products-container").select("Laptops");

    cy.getByDataTestAttribute("filter-products-container")
      .find(":selected")
      .should("have.text", "Laptops");

    cy.getByDataTestAttribute("product-card").should(
      "have.length.below",
      AMOUNT_OF_PRODUCTS_PER_PAGE
    );
    cy.getByDataTestAttribute("product-card-category")
      .should("have.length.below", AMOUNT_OF_PRODUCTS_PER_PAGE)
      .each(($el) => {
        cy.wrap($el).should("have.text", "Laptops");
      });

    cy.getByDataTestAttribute("filter-products-container").select(
      "All Products"
    );

    cy.getByDataTestAttribute("filter-products-container")
      .find(":selected")
      .should("have.text", "All Products");

    cy.getByDataTestAttribute("product-card-category").should(
      "have.length",
      AMOUNT_OF_PRODUCTS_PER_PAGE
    );

    /** paginator */
    const NUMBER_OF_PAGES = products.length / AMOUNT_OF_PRODUCTS_PER_PAGE;
    /**
     *  there is 2 <Paginator/> elements in the page that share the same
     *  state so will be 2 of each button
     */
    const NUMBER_OF_ACTIVE_BUTTONS = 2;
    cy.getByDataTestAttribute("pagination-button-selected").should(
      "have.length",
      NUMBER_OF_ACTIVE_BUTTONS
    );
    cy.getByDataTestAttribute("pagination-button").should(
      "have.length",
      NUMBER_OF_PAGES
    );

    cy.getByDataTestAttribute("product-card-name").then(($firstCards) => {
      cy.getByDataTestAttribute("pagination-button").then(($buttons) =>
        cy.wrap($buttons[0]).click()
      );

      cy.getByDataTestAttribute("product-card-name").then(($secondCards) => {
        cy.wrap($secondCards[0])
          .invoke("text")
          .then((secondCardText) => {
            cy.wrap($firstCards[0])
              .invoke("text")
              .then((firstCardText) => {
                expect(secondCardText).not.equals(firstCardText);
              });
          });
      });
    });

    cy.getByDataTestAttribute("pagination-button").then(($buttons) =>
      cy.wrap($buttons[0]).click()
    );

    /** sort */

    cy.getByDataTestAttribute("product-card").should(
      "have.length",
      AMOUNT_OF_PRODUCTS_PER_PAGE
    );

    cy.contains("Most Recent").should("be.visible");
    cy.contains("Lowest Price").should("be.visible");
    cy.contains("Highest Price").should("be.visible");

    cy.getByDataTestAttribute("product-card").should(
      "have.length",
      AMOUNT_OF_PRODUCTS_PER_PAGE
    );

    cy.getByDataTestAttribute("product-card-cost").then(($firstCards) => {
      cy.contains("Lowest Price").click();

      cy.getByDataTestAttribute("product-card-cost").then(($secondCards) => {
        cy.wrap($secondCards[0])
          .invoke("text")
          .then((secondCardText) => {
            cy.wrap($firstCards[0])
              .invoke("text")
              .then((firstCardText) => {
                expect(Number(secondCardText)).not.greaterThan(
                  Number(firstCardText)
                );
              });
          });
      });
    });

    cy.getByDataTestAttribute("product-card-cost").then(($firstCards) => {
      cy.contains("Highest Price").click();

      cy.getByDataTestAttribute("product-card-cost").then(($secondCards) => {
        cy.wrap($secondCards[0])
          .invoke("text")
          .then((secondCardText) => {
            cy.wrap($firstCards[0])
              .invoke("text")
              .then((firstCardText) => {
                expect(Number(firstCardText)).not.greaterThan(
                  Number(secondCardText)
                );
              });
          });
      });
    });

    cy.contains("Most Recent").click();

    /** testear que no se peuda canjear un producto sin los puntos necestarios */
    /**PROBAR FUNCIONALIDAD DE REDEEM PRODUCTS (volver a chequear state del nav) */
  });

  it("Claim a product, now the user does not have enough points to claim any other product, then add more points to his account and is able to redeem again", () => {
    cy.intercept("https://coding-challenge-api.aerolab.co/redeem", {
      fixture: "redeemProduct.json",
    }).as("redeemProduct");

    cy.intercept("https://coding-challenge-api.aerolab.co/user/points", {
      fixture: "addPoints.json",
    }).as("addPointsSuccess");

    cy.contains("Highest Price").click();

    cy.getByDataTestAttribute("redeem-product-button").each(($ele) => {
      cy.wrap($ele)
        .should("not.be.disabled")
        .should("contain.text", "Redeem for");
    });

    cy.getByDataTestAttribute("redeem-product-button").first().click();

    cy.wait("@redeemProduct");

    cy.getByDataTestAttribute("state-toast")
      .should("be.visible")
      .should(
        "have.text",
        "Product redeemed successfully. We deducted the amount from your account"
      );

    cy.getByDataTestAttribute("redeem-product-button").each(($ele) => {
      cy.wrap($ele).should("be.disabled").should("contain.text", "You need");
    });

    cy.getByDataTestAttribute("collapsible-content").should("not.be.visible");
    cy.getByDataTestAttribute("toggle-collapsible-logo")
      .should("be.visible")
      .click();
    cy.getByDataTestAttribute("collapsible-content").should("be.visible");

    cy.getByDataTestAttribute("collapsible-points-amount-button-5000").click();
    cy.getByDataTestAttribute("add-points-button").click();

    cy.wait("@addPointsSuccess");

    cy.getByDataTestAttribute("state-toast")
      .should("be.visible")
      .should(
        "have.text",
        "Points added successfully. We added the balance to your account"
      );
    cy.getByDataTestAttribute("user-points")
      .should("be.visible")
      .should("have.text", "5000");

    cy.getByDataTestAttribute("redeem-product-button").each(($ele) => {
      cy.wrap($ele)
        .should("not.be.disabled")
        .should("contain.text", "Redeem for");
    });

    cy.getByDataTestAttribute("presentation-container").click();
  });

  it("User tries to add points but there is an error and the operation fails", () => {
    cy.intercept("https://coding-challenge-api.aerolab.co/user/points", {
      statusCode: 500,
      body: "Cannot add points to user",
    }).as("addPointsFailure");

    cy.getByDataTestAttribute("collapsible-content").should("not.be.visible");
    cy.getByDataTestAttribute("toggle-collapsible-logo")
      .should("be.visible")
      .click();
    cy.getByDataTestAttribute("collapsible-content").should("be.visible");

    cy.getByDataTestAttribute("collapsible-points-amount-button-5000").click();

    cy.getByDataTestAttribute("user-points")
      .invoke("text")
      .then((userPoints) => {
        cy.getByDataTestAttribute("add-points-button").click();

        cy.wait("@addPointsFailure");

        cy.getByDataTestAttribute("state-toast")
          .should("be.visible")
          .should("have.text", "Request failed with status code 500");
        cy.getByDataTestAttribute("user-points")
          .should("be.visible")
          .should("have.text", userPoints);
      });
  });

  it("User tries to redeem a product but there an error and the operation fails", () => {
    cy.intercept("https://coding-challenge-api.aerolab.co/redeem", {
      statusCode: 500,
      body: "Cannot redeem product.",
    }).as("redeemProductFailure");

    cy.getByDataTestAttribute("user-points")
      .invoke("text")
      .then((userPoints) => {
        cy.getByDataTestAttribute("redeem-product-button").then(($buttons) => {
          cy.wrap($buttons).then(($buttons) => $buttons[0].click());
        });

        cy.wait("@redeemProductFailure");

        cy.getByDataTestAttribute("state-toast")
          .should("be.visible")
          .should("have.text", "Request failed with status code 500");
        cy.getByDataTestAttribute("user-points")
          .should("be.visible")
          .should("have.text", userPoints);
      });
  });
});
