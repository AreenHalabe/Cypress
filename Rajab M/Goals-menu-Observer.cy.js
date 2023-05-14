describe("menu", () => {
  beforeEach(() => {
    cy.visit("https://goal-dev.mdx.ac.uk/");
    cy.get('form[action="/login/"]').should("exist");
    cy.get("#id_username")
      .should("exist")
      .should("have.attr", "name", "username");
    cy.get("#id_password")
      .should("exist")
      .should("have.attr", "name", "password");
    cy.get('select[name="login_as"]').should("exist");
    cy.get("#id_username").type("Areen");
    cy.get("#id_password").type("TTGGVVDD$%^&");
    cy.get('select[name="login_as"]').select("Staff");
    cy.get('form[action="/login/"]>button[type="submit"]').click();
    cy.get(".nav > .nav-item > .nav-link").click();
    cy.get(".mr-auto > :nth-child(2) > .nav-link").should("exist").click();
  });
  it("Observer Selection", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(":nth-child(5) > .btn").click();
    cy.get("input#check1147").should("exist");
  });
  it("Observer specific user", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(":nth-child(5) > .btn").click();
    cy.get("input#check1147").should("exist");
    cy.get("#\\31 147_1010").should("exist");
    cy.get("#\\31 147_1010")
      .find('button.btn.btn-primary[onclick="observe(1010, 1147  , this)"]')
      .click();
  });
  it("check that the observer field is required and cannot be left empty", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(".align-items-center > :nth-child(3) > .btn").click();
    cy.get("#\\31 147_1010").should("be.not.visible");
  });
  it("unobserve all", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(":nth-child(5) > .btn").click();
    cy.get("input#not_observed").click({ force: true });
    cy.wait(1000);
    cy.get(":nth-child(5) > .btn").click();
    cy.wait(1000);
    cy.get(":nth-child(4) > .btn").click();
    cy.wait(1000);
  });
  it("Verify that the staff can input a grade value", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(".align-items-center > :nth-child(3) > .btn").click();
    cy.get("#\\31 147_743 ").should("exist");
    cy.get(
      "#\\31 147_743 > .m-0 > .late_True > .row > .is_late_True > .btn"
    ).click();
    cy.wait(2000);
    cy.get(":nth-child(1) > .textinput", { force: true }).select("1");
  });
  it("change the grade for a specific user", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get("input#not_observed").click({ force: true });
    cy.get(":nth-child(5) > .btn").click();
    cy.wait(1000);
    cy.get("#\\31 147_743 ").should("exist");
    cy.get(":nth-child(1) > .textinput", { force: true }).select("5");
  });
  it("observe all grade to empty grade", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(":nth-child(5) > .btn").click();
    cy.wait(1000);
    cy.get(":nth-child(5) > .btn").click();
    cy.get("center > img").should("exist");
  });
  it("observe all the same grade", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.wait(1000);
    cy.get(":nth-child(6) > .form-control", { force: true }).select("9");
  });
  it("unobserve all", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(":nth-child(5) > .btn").click();
    cy.get("input#not_observed").click({ force: true });
    cy.wait(1000);
    cy.get(":nth-child(5) > .btn").click();
    cy.wait(1000);
    cy.get(":nth-child(4) > .btn").click();
    cy.wait(1000);
  });
  it("Undo observe", () => {
    cy.get('label[for="all_goals"]').click();
    cy.get('label[for="all_groups"]').click();
    cy.get(".align-items-center > :nth-child(3) > .btn").click();
    cy.get("#\\31 307_743 ").should("exist");
    cy.get(
      "#\\31 307_743 > .m-0 > .late_False > .row > .is_late_False > .btn"
    ).click();
    cy.wait(1000);
    cy.get(":nth-child(2) > div > .btn").click();
  });
});
