package step_definitions.employee;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;

import base.Base;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.CustomerHomePage_Page;
import pages.EmployeeHomePage;
import pages.Employee_Profile_Update_page;

public class Step_Defs_Employee_Profile_Update extends Base {
	@When("I click on My Profile menue")
	public void i_click_on_My_Profile_menue() {
	   click(Employee_Profile_Update_page.profileEmployee);
	}

	@Then("I click on Update Info Button")
	public void i_click_on_Update_Info_Button() {
		click(Employee_Profile_Update_page.updateInfoEmployee);
	}

	@Then("I Update the Profile form")
	public void i_Update_the_Profile_form() throws InterruptedException {
		Employee_Profile_Update_page.updateProfile();
	}

	@Then("I verify the contact Number from updated Info")
	public void i_verify_the_contact_Number_from_updated_Info() {
		String v = driver.findElement( By.xpath("//input[@type='number']") ).getAttribute("value");
		assertEquals("3478855437", v);
//		String s =  getElementText(Employee_Profile_Update_page.degreeEmployee);
//		assertEquals("CSE", s);
	}



}
