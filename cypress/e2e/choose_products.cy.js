import homePage from "../support/homePage"

describe('Women Tops', () => {
    beforeEach(() => {
        cy.visit('/')
        // cy.get('[class="not-logged-in"]').contains(/default welcome msg!/i)
        // cy.getClass('not-logged-in').contains(/default welcome msg!/i)
        // class="level0 nav-2 category-item level-top parent ui-menu-item"
        
        // cy.get('.nav-2').trigger('mouseover')
        // cy.get('.nav-2-1').trigger('mouseover')
        homePage.elements.womenNavBar().trigger('mouseover')
        homePage.elements.womenTopsNavBar().trigger('mouseover')
    })

    it('Women add to cart - Jackets', () => {
        cy.contains(/jackets/i).click()
        cy.getClass('base').contains(/jackets/i)
        cy.getClass('product-image-container').first().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)

        cy.getClass('product-image-container').last().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)
    })
    it('Women add to cart - Hoodies & Sweatshirt', () => {
        cy.contains(/hoodies/i).click()
        cy.getClass('base').contains(/hoodies/i)
        cy.getClass('product-image-container').first().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)

        cy.getClass('product-image-container').last().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)
    })
    it('Women add to cart - Tees', () => {
        cy.contains(/tees/i).click()
        cy.getClass('base').contains(/tees/i)
        cy.getClass('product-image-container').first().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)

        cy.getClass('product-image-container').last().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)
    })
    it('Women add to cart - Bras & Tanks', () => {
        cy.contains(/bras/i).click()
        cy.getClass('base').contains(/bras/i)
        cy.getClass('product-image-container').first().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)

        cy.getClass('product-image-container').last().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)
    })
})

describe('Women Bottoms', () => {
    beforeEach(() => {
        cy.visit('/')
        // cy.get('[class="not-logged-in"]').contains(/default welcome msg!/i)
        // cy.getClass('not-logged-in').contains(/default welcome msg!/i)
        // class="level0 nav-2 category-item level-top parent ui-menu-item"
        homePage.elements.womenNavBar().trigger('mouseover')
        homePage.elements.womenPantsNavBar().trigger('mouseover')
    })

    it('Women add to cart - Pants', () => {
        cy.contains(/pants/i).click()
        cy.getClass('base').contains(/pants/i)
        cy.getClass('product-image-container').first().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)

        cy.getClass('product-image-container').last().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)
    })
    it('Women add to cart - Shorts', () => {
        cy.contains(/shorts/i).click()
        cy.getClass('base').contains(/shorts/i)
        cy.getClass('product-image-container').first().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)

        cy.getClass('product-image-container').last().click()
        cy.getClass('stock available').contains(/in stock/i)
        cy.getClass('swatch-option text').first().click()
        cy.getClass('swatch-option color').first().click()
        cy.getClass('action primary tocart').click()
        cy.getClass('page messages').contains(/you added/i)
    })

    it('debug', () => {
        cy.getId('ui-id-9').trigger('mouseover')
        cy.getId('ui-id-10').trigger('mouseover')
    })
})

describe('ATC by Listing', () => {
    beforeEach(() => {
        cy.visit('/')
        // cy.get('[class="not-logged-in"]').contains(/default welcome msg!/i)
        // cy.getClass('not-logged-in').contains(/default welcome msg!/i)
        // class="level0 nav-2 category-item level-top parent ui-menu-item"
        homePage.elements.womenNavBar().trigger('mouseover')
        homePage.elements.womenPantsNavBar().trigger('mouseover')
    })

    it.only('atc all item', () => {
        cy.contains(/shorts/i).click()
        cy.getClass('base').contains(/shorts/i)

        cy.getClass('item product product-item')
            .should('have.length', 12)
    })

    
})