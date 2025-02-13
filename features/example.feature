Feature: Form submission

  Scenario: Submit a form
    Given I navigate to the form submit demo page
    When I fill in the form with "satpal" and "this is playwright test"
    Then I should see a success message