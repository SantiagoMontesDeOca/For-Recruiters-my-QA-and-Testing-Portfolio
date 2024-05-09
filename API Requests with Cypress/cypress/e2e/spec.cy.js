/// <reference types="cypress" />

describe('Api Testing', () => {
  
  it('Api 1', () => {
    cy
    .visit('https://todomvc.com/examples/react/dist/')
    .get('[data-testid="text-input"]').type("Cook{enter}")

  })
})