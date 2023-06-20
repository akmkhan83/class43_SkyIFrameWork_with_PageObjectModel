package pages;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;

import base.Base;

public class EmployeeLogin_Page extends Base {
	//Locators
	public static By menuEmployeeLogin = By.xpath("//a[@href='elogin.php']");
	public static By textBoxUserId =  By.name("mailuid");
	public static By textBoxPassword =  By.name("pwd");
	public static By buttonEmployeeLogin =  By.name("login-submit") ;
	public static By employeeLogOut = By.xpath("//a[text()='Log Out']");
	//Actions
	public static String loginAsEmployee(String userId, String password) {
		navigateURL(host);
		click( EmployeeLogin_Page.menuEmployeeLogin );
		sendkeys(EmployeeLogin_Page.textBoxUserId , userId );
		sendkeys(EmployeeLogin_Page.textBoxPassword, password );
		click( EmployeeLogin_Page.buttonEmployeeLogin);
		String s =  getElementText(EmployeeHomePage.lebelWelcomeSlogan);
		return s;
	
	}
	
	public static void employeeLogOut() {
		click(employeeLogOut);
	}
}
