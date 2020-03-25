import landingPage from "../../paje-object/LandingPage";
import demographicsPage from "../../paje-object/DemographicsPage";

describe("transplan kidney donor page test", () => {
  before(() => {
    Cypress.config(
      "baseUrl",
      "https://mobile-survey.patientfollowup.org.arcgmrqa.i.mymedsleuth.com/transplant-kidney/donor-prereq-1/dialogs"
    );
    cy.viewport(1280, 800);
  });

  it("should check the Landing page elements", () => {
    var welcomeText = "Welcome to the BREEZE TRANSPLANT online health";
    var firstName = "First name";
    var middleName = "Middle name";
    var lastName = "Last name";
    cy.visit("/landing-page")
      .get(landingPage.logo)
      .should("be.visible")
      .get(landingPage.headerBar)
      .should("be.visible")
      .get(landingPage.increaseTextSizeBtn)
      .should("be.visible")
      .get(landingPage.decreaseTextSizeBtn)
      .should("be.visible")
      .get(landingPage.dialogText)
      .then(el => {
        assert.include(el.text(), welcomeText);
      });
    cy.get(landingPage.termsLink)
      .should("be.visible")
      .get(landingPage.startSurveyBtn)
      .click();
    cy.get(landingPage.yourFirstNameField)
      .should("be.visible")
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Required")
      .get(landingPage.yourFirstNameField)
      .type(firstName)
      .get(landingPage.middleNameField)
      .type(middleName)
      .get(landingPage.yourLastNameField)
      .type(lastName)
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.dayField)
      .type("01")
      .get(landingPage.monthField)
      .type("01")
      .get(landingPage.yearField)
      .type("1991")
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Required")
      .get(landingPage.maleRadioBtn)
      .click()
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.yourHeightFeetFiled)
      .should("be.visible")
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Not a whole number")
      .get(landingPage.yourHeightFeetFiled)
      .type("190")
      .get(landingPage.yourHeightInchesFiled)
      .type("190")
      .get(landingPage.yourWeightFiled)
      .type("80")
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.primaryPhoneFiled)
      .should("be.visible")
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Required")
      .get(landingPage.primaryPhoneFiled)
      .type("555-55-55")
      .get(landingPage.yourPhoneNumberTypeSelect)
      .select("Mobile")
      .get(landingPage.yourEmailAddressFiled)
      .type("test@test.com")
      .get(landingPage.nextBtn)
      .click();
    cy.contains("Donor Type")
      .should("be.visible")
      .get(landingPage.iKnowRecipientRadioBtn)
      .should("be.visible")
      .get(landingPage.iDontKnowRecipientRadioBtn)
      .should("be.visible")
      .get(landingPage.nextBtn)
      .should("be.visible");
  });

  it("should check the Demographics page elements", () => {
    var headingText = "Please enter your Race:";
    var americanIndianAlaskaText = "American Indian or Alaska Native";
    var arabianText = "Arabian";
    var blackAfricanAmericanText = "Black or African American";
    var whiteCaucasianText = "White/Caucasian";
    var asianText = "Asian";
    var middleEasternNorthAfricanText = "Middle Eastern or North African";
    var nativeHawaiianPacificText = "Native Hawaiian or Other Pacific Islander";
    var otherText = "Other";
    var hispanicOriginHeading = "Are you of Hispanic origin?YesNo";
    var preferedLanguageHeading = "What is your preferred language?";
    var languages = [
      "English",
      "Spanish",
      "Vietnamese",
      "Mandarin",
      "Arabic",
      "Creole",
      "Portuguese",
      "Other"
    ];
    var otherLanguageHeading = "If Other:";
    var doYouNeedTranslatorHeading = "Do you need a translator?YesNo";
    cy.visit("/race.0")
      .get(landingPage.startSurveyBtn)
      .click()
      .get(demographicsPage.headingText)
      .should("have.text", headingText)
      .get(demographicsPage.aindCheckBox)
      .should("have.text", americanIndianAlaskaText)
      .get(demographicsPage.arabianCheckBox)
      .should("have.text", arabianText)
      .get(demographicsPage.afroCheckBox)
      .should("have.text", blackAfricanAmericanText)
      .get(demographicsPage.whiteCheckBox)
      .should("have.text", whiteCaucasianText)
      .get(demographicsPage.asianCheckBox)
      .should("have.text", asianText)
      .get(demographicsPage.middleeasternCheckBox)
      .should("have.text", middleEasternNorthAfricanText)
      .get(demographicsPage.isalnderCheckBox)
      .should("have.text", nativeHawaiianPacificText)
      .get(demographicsPage.otherCheckBox)
      .should("have.text", otherText)
      .get(demographicsPage.hispanicQuestionBar)
      .should("have.text", hispanicOriginHeading)
      .get(demographicsPage.preferedLanguageBar)
      .then(el => {
        assert.include(el.text(), preferedLanguageHeading);
      });
    for (var i = 0; i < languages.length; i++) {
      cy.get(demographicsPage.languageSelector)
        .select(languages[i])
        .should("be.visible");
    }
    cy.get(demographicsPage.otherLanguageBar)
      .should("have.text", otherLanguageHeading)
      .get(demographicsPage.otherLanguageField)
      .should("be.visible")
      .get(demographicsPage.doYouNeedTransltorBar)
      .should("have.text", doYouNeedTranslatorHeading)
      .get(landingPage.nextBtn)
      .click()
      .get(landingPage.validationErrorMsg)
      .first()
      .should("have.text", "Required");
  });
});
