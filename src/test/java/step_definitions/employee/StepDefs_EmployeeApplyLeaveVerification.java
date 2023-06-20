package step_definitions.employee;

import static org.junit.Assert.assertEquals;

import base.Base;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.EmployeeApplyLeave_Page;
import pages.EmployeeHomePage;

public class StepDefs_EmployeeApplyLeaveVerification extends Base{
	
	@Then("I click on leave menu")
	public void i_click_on_leave_menu() {
		click(EmployeeApplyLeave_Page.leaveMenu);
	}

	@When("I fillup apply leave form")
	public void i_fillup_apply_leave_form() {
		EmployeeApplyLeave_Page.submitLeaveReason(); 
	}

	@Then("I verify leave reason")
	public void i_verify_leave_reason() {
		String s = getElementText(EmployeeApplyLeave_Page.leaveReason);
		assertEquals("Visit to Bangladesh", s);
	}

}
