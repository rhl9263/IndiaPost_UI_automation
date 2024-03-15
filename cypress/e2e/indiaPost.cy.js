/// <reference types="Cypress" /> 


describe('India Post Website Production Live Testing', () => {
  // open the url 
         beforeEach('visit base url', () =>{
          cy.visit('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx', {timeout: 10000});
         })
        it('Verify that it opens the India Post production page', () => {
            cy.visit('https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx', {timeout: 10000});
        })
        it('Verify that india post logo is present', () => {
          cy.get('#india-post-logo').should('be.visible');
          })
        it('Verify that G20 logo is present', () => {
          cy.get('[style="padding: 20px 20px 0px 10px; display:inline-block;float:right;"]').should('be.visible');
          })
        it('Verify that 75Azadi Mahotsav logo is present', () => {
          cy.get('[style="padding: 20px 30px 0px 10px; display:inline-block;float:right;"]').should('be.visible');
          })
        it('Verify that emblem of india logo is present', () => {
          cy.get('#emblem-of-india-logo').should('be.visible');
          })
        it('Verify that menu option is present and clickable', () => {
          cy.get('[data-level="0"] > :nth-child(1)').should('be.visible').should('have.text','Menu');
          cy.get('.fas').click()
          })
        it('Verify that About Us option is present in menu and clickable', () => {
          cy.get('[data-level="0"] > :nth-child(2) > :nth-child(1) > :nth-child(1)').click();
          })
        it('Verify that Performance Dashboard option is present and clickable', () => {
          cy.get('[data-level="0"] > :nth-child(2) > :nth-child(2) > a').click();
          })
        it('Verify that mails and Stamp option is present in menu and clickable', () => {
          cy.get('[data-level="0"] > :nth-child(2) > :nth-child(3) > :nth-child(1)').click();
          })
        it('Verify that Banking and Remittance option is present and clickable', () => {
          cy.get('[data-level="0"] > :nth-child(2) > :nth-child(4) > :nth-child(1)').click();
          })
        it('Verify that NPS option is present in menu and clickable', () => {
          cy.get(':nth-child(2) > :nth-child(5) > a').click();
          })
        it('Verify that Insurance option is present and clickable', () => {
          cy.get('[data-level="0"] > :nth-child(2) > :nth-child(6) > :nth-child(1)').click();
          })
        it('Verify that business and Ecommerce option is present in menu and clickable', () => {
          cy.get(':nth-child(2) > :nth-child(7) > :nth-child(1)').click();
          })
        it('Verify that track and trace is present in the webPage and we can check the radio button present for track and trace',()=>{
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_Label1').should('have.text','Track N Trace')
        })
        it('Verify that consignment is present in the webPage and and we can check the radio button present consignment',()=>{
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_lblTrackConsignment').should('have.text','Consignment')
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_rbTrackConsignment').should('be.visible')
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_rbTrackConsignment').check().should('be.checked')
        })
        it('Verify that ref no is present in the webPage and and we can check the radio button present ref no',()=>{
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_lblTrackAWB').should('have.text','Ref No')
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_rbTrackAWB').should('be.visible')
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_rbTrackAWB').check().should('be.checked')
        })
        it('Verify that complaint is present in the webPage and and we can check the radio button present for complaint',()=>{
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_lblTrackComplaint').should('have.text','Complaint')
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_rbTrackComplaint').should('be.visible')
          cy.get('#ctl00_SPWebPartManager1_g_aa197fec_b38c_41a8_b14e_a11722636b37_ctl00_rbTrackComplaint').check().should('be.checked')
        })
        it('verify that calculate postage is present in web page', () => {
          cy.get(':nth-child(2) > :nth-child(1) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Calculate Postage')
        })
        it('verify that Find Pincode is present in web page', () => {
          cy.get(':nth-child(2) > :nth-child(2) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Find Pincode')
        })
        it('verify that Click n Book is present in web page', () => {
          cy.get(':nth-child(2) > :nth-child(3) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Click n Book')
        })
        it('verify that Buy Stamps is present in web page', () => {
          cy.get(':nth-child(2) > :nth-child(4) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Buy Stamps')
        })
        it('verify that Locate Post Office is present in web page', () => {
          cy.get(':nth-child(2) > :nth-child(5) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Locate Post Office')
        })
        it('verify that Dak Karmayogi is present in web page', () => {
          cy.get(':nth-child(3) > :nth-child(1) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Dak Karmayogi')
        })
        it('verify that Dak Ghar Niryat is present in web page', () => {
          cy.get(':nth-child(3) > :nth-child(2) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Dak Ghar Niryat')
        })
        it('verify that Post Office Savings Bank is present in web page', () => {
          cy.get(':nth-child(3) > :nth-child(3) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Post Office Savings Bank')
        })
        it('verify that India Post Payments Bank is present in web page', () => {
          cy.get(':nth-child(3) > :nth-child(4) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','India Post Payments Bank')
        })
        it('verify that Postal Life Insurance is present in web page', () => {
          cy.get(':nth-child(3) > :nth-child(5) > .india-post-tool-figure > .india-post-tool-figcaption').should('have.text','Postal Life Insurance')
        })
})