Feature: Employee Login Functionality
@Sanity
Scenario Outline: Verify Employee Login Functionality
Given I am in landing page 
When I Click on Employee Login Menu
Then Enter Employee User Id as "<userId>"    			
And Enter Employee Password as "<password>"
And I Click on Employee Login Button
Then Verify I am in Employee Home Page

Examples:
|userId          		|password|
|testpilot@gmail.com| 1234   |