const credentials = [
    {userType: 'UserType1', email: 'UserType2Login', pass: 'UserType2Password'},
    {userType: 'UserType2', email: 'aprilliariqqikurniasari@gmail.com', pass: 'Xyz010493456'},
	{userType: 'UserType3', email: 'UserType2Login@gmail.com', pass: 'Abc123.45'},
	{userType: 'UserType4', email: 'aprilliariqqikurniasari@gmail.com', pass: 'Abc123.45'}
];
    
describe('Visit Magento', () => {	
	it('Check Forgot Password', () => {
      cy.visit('https://magento.softwaretestingboard.com');
      cy.contains("Sign In").click();
	  cy.contains("Forgot Your Password?").click()
    });
    
    beforeEach('Go to Magento', () => {
      cy.visit('https://magento.softwaretestingboard.com');
      cy.contains("Sign In").click();
     });
    
    // dynamically create a single test for each credential obj in the list
    credentials.forEach(credential => {
      it(`Checks Authorization by ${credential.userType} user`, () => {
        cy.get('#email').type(credential.email)
		cy.get('#pass').type(credential.pass)
		cy.get('.action.login.primary').click()
		if (credential.userType.includes('nonExisting')) {
          cy.get('[data-cy=passwordError]').should('contain', 'No user with such login');
          cy.url().should('not.include', '/customer/account/');
        }
		else cy.visit('https://magento.softwaretestingboard.com/customer/account/')
	  });
    });
});