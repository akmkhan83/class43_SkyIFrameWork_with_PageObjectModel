package step_definitions.employee;

import static org.junit.Assert.assertEquals;
import org.openqa.selenium.By;
import base.Base;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.EmployeeHomePage;
import pages.EmployeeLogin_Page;

public class StepDefs_EmployeeLoginFunctionality extends Base {
	@Given("I am in landing page")
	public void i_am_in_landing_page() {
		navigateURL(host);
	}

	@When("I Click on Employee Login Menu")
	public void i_click_on_employee_login_menu() {
		click(EmployeeLogin_Page.menuEmployeeLogin);
	}

	@Then("Enter Employee User Id as {string}")
	public void enter_user_id_as(String email) {
		sendkeys(EmployeeLogin_Page.textBoxUserId, email);
	}

	@Then("Enter Employee Password as {string}")
	public void enter_password_as(String password) {
		sendkeys(EmployeeLogin_Page.textBoxPassword, password);
	}
	@Then("I Click on Employee Login Button")
	public void i_Click_on_Login_Button() {
		click( EmployeeLogin_Page.buttonEmployeeLogin);
	}
	@Then("Verify I am in Employee Home Page")
	public void verify_i_am_in_my_home_page() {
		String s = getElementText(EmployeeHomePage.lebelWelcomeSlogan);
		assertEquals("Welcome Test", s);
		
	}
}
