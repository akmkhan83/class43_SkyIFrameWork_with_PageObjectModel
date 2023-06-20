Feature: Employee HomePage Verfication

Scenario: Verfy Employee HomePage welcome slogan

Given I logged in employee homepage
|userId          		|password|
|testpilot@gmail.com| 1234   |
When I verify welcome slogan in homepage
Then I log out from employee homepage