import testData from '../fixtures/tabledata.json';
const url = "https://testpages.herokuapp.com/styled/tag/dynamic-table.html";

describe('Assignment for SDET- CAW Studios', () => {
  it('assert the data you have stored with the data that is populated in the UI table', () => {
    // Navigate to the web page
    cy.visit(url);
    //click on table table
    cy.contains('Table Data').click({ force: true });
    // insert datas
    cy.get('#jsondata').clear().type(JSON.stringify(testData.Data), { parseSpecialCharSequences: false });
    //click on refresh button
    cy.get('#refreshtable').click();
    // verify name data
    cy.get("tr td:nth-child(1)").each(($e1, index,) => {
      const tableName = $e1.text();
      if (tableName.includes(testData.Data[index].name)) {
        cy.get("td:nth-child(1)").eq(index).then((text) => {
          const tableNameData = text.text();
          expect(tableNameData).to.contains(testData.Data[index].name);
        })
      }
    })
    // verify age data
    cy.get("tr td:nth-child(2)").each(($e1, index,) => {
      const tableAge = $e1.text();
      if (tableAge.includes(testData.Data[index].age)) {
        cy.get("td:nth-child(2)").eq(index).then((text) => {
          const tableAgeData = text.text();
          expect(tableAgeData).to.contains(testData.Data[index].age);
        })
      }
    })
    // verify gender data
    cy.get("tr td:nth-child(3)").each(($e1, index,) => {
      const tableGender = $e1.text();
      if (tableGender.includes(testData.Data[index].gender)) {
        cy.get("td:nth-child(3)").eq(index).then((text) => {
          const tableGenderData = text.text();
          expect(tableGenderData).to.contains(testData.Data[index].gender);
        })
      }
    })
  })
})