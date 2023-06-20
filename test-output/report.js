$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/customer/Feature_CustomerLoginFunctionality.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in CUSTOMER Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerLoginFunctionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerLoginFunctionality.i_Click_on_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerLoginFunctionality.click_on_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerLoginFunctionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerLoginFunctionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerLoginFunctionality.i_Click_on_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in CUSTOMER Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerLoginFunctionality.verify_that_I_am_in_CUSTOMER_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/customer/Feature_InvalidCustomerLogin.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "I Enter User Id from row number \"\u003crownumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rownumber"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.customer.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/customer/Feaure_CustomerOrder.feature");
formatter.feature({
  "name": "Customer orders functionality",
  "description": "  As a Customer\n  I want to See my Orders\n  So that I can manage my Orders",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Customer Order total count Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in as Customer",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerOrder.i_logged_in_as_Customer_with_and(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Order List Menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerOrder.click_on_Order_List_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Total Order count is greater than 100",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.customer.StepDefs_CustomerOrder.verify_Total_Order_count_is_greater_than(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/employee/Feature_Employee%20ApplyLeave%20Verification.feature");
formatter.feature({
  "name": "Employee Apply Leave page Verfication",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Employee Apply Leave Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in employee homepage",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeHomePageVerification.i_logged_in_employee_homepage(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on leave menu",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeApplyLeaveVerification.i_click_on_leave_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fillup apply leave form",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeApplyLeaveVerification.i_fillup_apply_leave_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify leave reason",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeApplyLeaveVerification.i_verify_leave_reason()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/employee/Feature_Employee%20HomePage%20Verification.feature");
formatter.feature({
  "name": "Employee HomePage Verfication",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verfy Employee HomePage welcome slogan",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in employee homepage",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeHomePageVerification.i_logged_in_employee_homepage(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify welcome slogan in homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeHomePageVerification.i_verify_welcome_slogan_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I log out from employee homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeHomePageVerification.i_log_out_from_employee_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/employee/Feature_Employee%20Profile%20Update.feature");
formatter.feature({
  "name": "Employee Profile form update",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Employee Profile updated from",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in employee homepage",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.employee.StepDefs_EmployeeHomePageVerification.i_logged_in_employee_homepage(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on My Profile menue",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.employee.Step_Defs_Employee_Profile_Update.i_click_on_My_Profile_menue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Update Info Button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.employee.Step_Defs_Employee_Profile_Update.i_click_on_Update_Info_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Update the Profile form",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.employee.Step_Defs_Employee_Profile_Update.i_Update_the_Profile_form()"
});
