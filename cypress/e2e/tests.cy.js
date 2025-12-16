describe('Kullanıcı tema ve dil değiştirme tercihleri', () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  })
  
  
  it('Dil değiştirme butonu aktif olarak çalışıyor ve dili türkçeye çeviriyor', () => {
    cy.window().its("localStorage").invoke("getItem", "language").should("eq", '"en"');
    cy.get('[data-cy="toggle-language"]').click();
    cy.window().its("localStorage").invoke("getItem","language").should("eq",'"tr"');
    cy.reload();
    cy.window().its("localStorage").invoke("getItem","language").should("eq",'"tr"');
  })
   it('Tema değiştirme butonu aktif olarak çalışıyor ve temayı dark moda alıyor', () => {
    cy.window().its("localStorage").invoke("getItem", "theme").should("eq", '"light"');
    cy.get('[data-cy="toggle-theme"]').click();
    cy.window().its("localStorage").invoke("getItem","theme").should("eq",'"dark"');
    cy.reload();
    cy.window().its("localStorage").invoke("getItem","theme").should("eq",'"dark"');
  })
})