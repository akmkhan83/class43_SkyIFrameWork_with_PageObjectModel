package step_definitions.employee;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.EmployeeHomePage;
import pages.EmployeeLogin_Page;

public class StepDefs_EmployeeHomePageVerification extends Base{
	
	@Given("I logged in employee homepage")
	public void i_logged_in_employee_homepage(DataTable dataTable) {
		EmployeeLogin_Page.loginAsEmployee(dataTable.cell(1, 0), dataTable.cell(1, 1));
	}

	@When("I verify welcome slogan in homepage")
	public void i_verify_welcome_slogan_in_homepage() {
		String s = getElementText(EmployeeHomePage.lebelWelcomeSlogan);
		assertEquals("Welcome Test", s);
	}

	@Then("I log out from employee homepage")
	public void i_log_out_from_employee_homepage() {
		click(EmployeeLogin_Page.employeeLogOut);
	}


}
