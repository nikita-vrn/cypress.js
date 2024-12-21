describe('Homework', function () {
it('Верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type ('german@dolnikov.ru');
    cy.get('#pass').type ('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type ('USER_LOGIN');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type ('german@dolnikov.ru');
    cy.get('#pass').type ('iLoveqastudioSoMuch');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type ('sergey@dolnikov.ru');
    cy.get('#pass').type ('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Проверка ввода логина без @', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type ('germandolnikov.ru');
    cy.get('#pass').type ('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
})

it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type ('GerMan@Dolnikov.ru');
    cy.get('#pass').type ('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   
})
})
     
 
