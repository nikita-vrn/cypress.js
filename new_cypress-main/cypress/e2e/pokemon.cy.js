describe('Homework2', function () {
    it('e2e Покупка и отмена покупки покемон-премиум', function () {
        cy.visit('https://pokemonbattle.ru/login');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('.auth__button').click();
        cy.get('.header__container > .header__id').contains('13007'); // айди моего тренера
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/premium"]').click();
        cy.get('.auth__input').type('1');
        cy.get('.k_price_premium > span').should('be.visible');
        cy.get('.k_price_premium > span').contains('100');
        cy.get('.auth__form > .button_to_down > .profile__button').click();
        cy.get('.pay__select-block').contains('100');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('cardholder name');
        cy.get('.pay-btn').click();
        cy.get('.pay__select-block').contains('100');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__padding').should('be.visible');
        cy.get('.payment__padding').contains('Покупка прошла успешно');
        cy.get('.payment__adv').click();
        cy.get('.header__id-no-main > .trainer_info__legend').should('be.visible');
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/premium"]').contains('1 день');
        cy.get('.k_cart_trainer_premium > .title-single__img').should('be.visible');
        cy.get('[href="/premium"]').click();
        cy.get('.k_page_main_premium > .profile-mobile-wrapper > .k_active_premium').contains('Премиум подключен!');
        cy.get('.button_cansel_premium > .profile__button').click();
        cy.get(':nth-child(2) > .profile__button').click();
        cy.get('.k_page_cansel_ok_premium > .profile-mobile-wrapper').should('be.visible');
        cy.get('.k_page_cansel_ok_premium > .profile-mobile-wrapper').contains('Вы отменили подписку :(');
        cy.get('.header__container > .header__id').click();
        cy.get('[href="/premium"]').click();
        cy.get('.k_page_main_premium > .profile-mobile-wrapper').should('be.visible');
        cy.get('.k_page_main_premium > .profile-mobile-wrapper').contains('Что даёт подписка');
    })
    })
    