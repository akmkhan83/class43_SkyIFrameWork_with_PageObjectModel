package pages;

import org.openqa.selenium.By;

public class EmployeeHomePage {
	
	public static By lebelWelcomeSlogan = By.xpath("//h2[text()='Welcome Test ']");
	public static By menuApplyLeaveBy = By.xpath("//a[@href='eloginwel.php?id=102']");
	public static By reasonInputBox = By.xpath("//input[@name='reason']");
	public static By startDateInputBox = By.xpath("//input[@name='start']");
	public static By endtDateInputBox = By.xpath("//input[@name='end']");
	public static By submitButton = By.xpath("//button");
}
