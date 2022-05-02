
const queryMapper = {
  zurich: 'locationsZurich',
  basel: 'locationsBasel',
  default: 'locationsZurich'
}

const mocks = {
  getLocationsByQuery: (location: string) => {
    cy.fixture(`${queryMapper[location.toLowerCase()]}.json`).then((data) => {
      cy.intercept(`**/locations?query=${location}`, data)
    });
  },
  getLocationsByCoordinates: (x: string, y: string, location?: string) => {
    cy.fixture(`${queryMapper[(location || 'default').toLowerCase()]}.json`).then((data) => {
      cy.intercept(`**/locations?x=${x}&y=${y}`, data)
      .as('request:getStations');
    });
  },
  getStations: (stations?: string) => {
    cy.fixture(`${ stations || 'stationsDefault' }.json`).then((data) => {
      cy.intercept(`**/stationboard?station=**`, data)
      .as('request:getStations');
    });
  }
}

export default mocks;