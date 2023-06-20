package pages;

import org.openqa.selenium.By;

import base.Base;

public class EmployeeApplyLeave_Page extends Base{
	
	//Locators
	public static  By inputReasonBox = By.xpath("//input[@placeholder='Reason']");
	public static  By startDate = By.xpath("//input[@name='start']");
	public static  By endDate = By.xpath("//input[@name='end']");
	public static  By submitButton = By.xpath("//button");
	public static  By leaveReason = By.xpath("//tbody/tr[last()]/td[text()='Visit to Bangladesh']");
	public static  By leaveMenu = By.xpath("//a[text()='Apply Leave']");
	//Action (Submit leave form)
	
	public static void submitLeaveReason () {
		sendkeys(inputReasonBox, "Visit to Bangladesh");
		sendkeys(startDate, "05/30/2023");
		sendkeys(endDate, "06/25/2023");
		click(submitButton);
	}
}

