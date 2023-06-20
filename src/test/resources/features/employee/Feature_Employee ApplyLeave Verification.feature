Feature: Employee Apply Leave page Verfication

Scenario: Verify Employee Apply Leave Page 

Given I logged in employee homepage
|userId          		|password|
|testpilot@gmail.com| 1234   |
Then I click on leave menu
When I fillup apply leave form
And I verify leave reason