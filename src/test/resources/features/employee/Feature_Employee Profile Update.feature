Feature: Employee Profile form update
Scenario: Verify Employee Profile updated from
Given I logged in employee homepage
|userId          		|password|
|testpilot@gmail.com| 1234   |
When I click on My Profile menue
Then I click on Update Info Button
Then I Update the Profile form
Then  I verify the contact Number from updated Info