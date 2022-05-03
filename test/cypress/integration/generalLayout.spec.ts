import mocks from "./actions/mocks";

describe('Public Transit - General Layout', () => {

  beforeEach(() => {
    mocks.getLocationsByQuery('Zurich');
    cy.visit('http://localhost:3000');
  })

  it('Should render content appropriately', () => {

    cy.get(`[data-test='input:SearchInput:Location-Search']`)
    .should('exist');
    
    cy.get(`[data-test='input:SearchInput:Location-Search']`)
    .should('contain', '');
    
    cy.get('[id="map"]').should('exist');

    cy.fixture(`locationsZurich.json`).then((data) => {
      data.stations.forEach(({ name }) => cy.get(`[title="marker:${name}"`).should('exist'));
    })

  })

  it('Should open info window on marker click', () => {
    
    cy.get('[title="marker:Zürich, Paradeplatz"]')
      .click();

    cy.get('[data-test="title:infoContainer:Zürich, Paradeplatz"]')
      .should('contain', 'Zürich, Paradeplatz');

    cy.get('[data-test="cta:infoContainer:Zürich, Paradeplatz"]')
      .should('contain', 'show Timetable');
    
  })

  it('Should open time table and render list', () => {
    
    cy.get('[title="marker:Zürich, Paradeplatz"]')
      .click();
    mocks.getStations();
    cy.get('[data-test="cta:infoContainer:Zürich, Paradeplatz"]')
      .click();
    
    cy.get('[data-test="title:infoContainer:Zürich, Paradeplatz"]')
      .should('contain', 'Zürich, Paradeplatz');
    
      
      cy.get('[data-test="container:backdrop"]')
      .within(() => {
        cy.get('[data-test="icon:backdrop:close"]')
          .should('exist');

        cy.get('[data-test="title:backdrop"]')
          .should('exist');

        cy.get('[data-test="subtitle1:backdrop"]')
          .should('exist');
    
        cy.get('[data-test="subtitle2:backdrop"]')
          .should('exist');

        cy.get('[data-test="container:pagination"]')
          .within(() => {
            cy.get('[data-test="text:pagination:title"]')
              .should('contain', 'Rows per page')
            
            cy.get('[data-test="text:pagination:elementsCount"]')
              .should('exist')

            cy.get('[data-test="icon:pagination:rightArrow"]')
              .should('exist')

            cy.get('[data-test="select:pagination:pageSize"]')
              .should('exist')
          });
      });

  })

  it('Should validate search input and do the search', () => {
    
    cy.get('[data-test="input:SearchInput:Location-Search"]')
      .type('Ba');

    cy.get('[data-test="error:SearchInput:Location-Search"]')
      .should('contain', 'Please, add at least three letters');

    mocks.getLocationsByQuery('basel')

    cy.get('[data-test="input:SearchInput:Location-Search"]')
      .type('sel SBB');

    cy.get('[data-test="error:SearchInput:Location-Search"]')
      .should('not.contain', 'Please, add at least three letters');
    
    mocks.getLocationsByCoordinates('47.547412', '7.589577', 'basel');
    
    cy.get('[title="marker:Basel, Bhfeingang Gundeldingen"]')
      .should('exist');

    })
})