
describe('Stuff Menu Page', () => {

  beforeEach(()=>{
    cy.visit('https://goal-dev.mdx.ac.uk/staff/21/staffs'); 
    cy.get('form[action="/login/"]').should('exist');
    cy.get('#id_username').should('exist').should('have.attr' , 'name' , 'username');
    cy.get('#id_password').should('exist').should('have.attr' , 'name' , 'password');
    cy.get('select[name="login_as"]').should('exist');
    cy.get('#id_username').type('Areen');
    cy.get('#id_password').type('TTGGVVDD$%^&');
    cy.get('select[name="login_as"]').select('Staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
  })

  it('Cheack From navbar' , ()=>{
    cy.get('.navbar').should('exist');
  })

  it('Cheack From Staff Tabel ' , ()=>{
    cy.get('.dataTables_scrollHead').should('exist');
  })
  
  it('Add Staff to Menu' , ()=>{
    cy.get('#new_staff').should('exist');
    cy.get('#new_staff').type('NewStaff');
    cy.get('.toolbar > .row > :nth-child(2) > .btn').should('exist').click();
    cy.get('.dataTables_scrollHead').should('exist');
    

  })

  it('delet Staff from Menu' , ()=>{
    cy.get('#staff_newstaff > .sorting_1').should('exist').click();
    cy.get('.dtr-data > .row > :nth-child(2) > [data-href="newstaff"]').should('exist').click();
    cy.get('#confirm-delete > .modal-dialog > .modal-content > .modal-footer > .btn-danger').should('exist').click();
  })

  it('Edite Staff' , ()=>{
    cy.get('#staff_Rajab > .sorting_1').should('exist').click();
    cy.get('.dtr-data > .row > :nth-child(1) > a').should('exist').click();
    cy.get('#edit_staff_Rajab > :nth-child(7) > .textinput').select('Read');
    cy.get('#edit_staff_Rajab > :nth-child(8) > .textinput').select('Read');
  })



 it('Search on Staff' , ()=>{
    cy.get('label > .form-control').should('exist').type('Areen');
  })

 




})




describe('Goals Page', () => {

  beforeEach(()=>{
    cy.visit('https://goal-dev.mdx.ac.uk/staff/21/staffs');
    cy.get('#id_username').type('Areen');
    cy.get('#id_password').type('TTGGVVDD$%^&');
    cy.get('select[name="login_as"]').select('Staff');
    cy.get('form[action="/login/"] > button[type="submit"]').click();
    cy.get('.nav > .nav-item > .nav-link').click();
    cy.get('.mr-auto > :nth-child(2) > .nav-link').should('exist').click();

  })




 

  it('Cheack From Apply Fillter button' , ()=>{
    cy.get('.align-items-center > :nth-child(3) > .btn').should('exist');
    cy.get('[style=" padding-right: 0px; padding-left: 20px; "] > div.panel-title > :nth-child(4)').should('exist').click();
    cy.get(':nth-child(3) > .custom-control').should('exist').click();
    cy.get('.align-items-center > :nth-child(3) > .btn').click();
    cy.get('.pt-2').should('exist');
  })


})






