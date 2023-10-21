function randomfirst (){
const randomstring = Math.random().toString(36).substring(2, 10)
const first= randomstring
return first
}

function randomlast (){
  const randomstring=Math.random().toString(36).substring(2, 10)
  const last= randomstring
  return last
}

function randomemail (){
  const randomstring=Math.random().toString(36).substring(2, 10)
  const email= randomstring + "gmail.com"
  return email
}

function randompassword (){
  const randomstring=Math.random().toString(36).substring(2, 10)
  const pass= randomstring + Number (3)
  return pass

}


let firstname = randomfirst()
let lastname = randomlast()
let email= randomemail()
let password = randompassword()


describe('Magenta - Register', () => {
  it('visit Link Magenta', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
  cy.contains('Create an Account'). click()
  //should open//
  // includes '/commands/actions'//
  cy.url().should('include', '/customer/account/create/')

  // input form
  cy.get("#firstname").type('Abdul'),
  cy.get("#lastname").type('Bagaskara'),
  cy.get("#email_address").type('Abdul@gmail.com'),
  cy.get("#password").type('Aagaskara123'),
  cy.get("#password-confirmation").type('Aagaskara123')

//click button 
cy.get('.action.submit.primary').click()
cy.url().should('include', '/customer/account/')
})
})