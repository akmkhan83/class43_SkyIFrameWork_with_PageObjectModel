package pages;

import org.openqa.selenium.By;

import base.Base;

//Locators
public class Employee_Profile_Update_page extends Base {
 public static By profileEmployee = By.xpath("//a[@href='myprofile.php?id=102']");
 public static By updateInfoEmployee =By.xpath("//button[@name='send']");
 public static By contactEmployee = By.name("contact");
 public static By departmentEmployee = By.xpath("//input[@name='dept']");
 public static By degreeEmployee = By.xpath("//input[@name='degree']");
 public static By addressEmployee = By.xpath("//input[@name='address']");
 public static By submitEmployee = By.xpath("//button");

 //Actions
 public static void updateProfile() throws InterruptedException {

	 clear(contactEmployee);
	 sendkeys(contactEmployee, "3478855437");
	 clear(departmentEmployee);
	 sendkeys(departmentEmployee, "QA");
	 clear(degreeEmployee);
	 sendkeys(degreeEmployee, "CSE");
	 clear(addressEmployee);
	 sendkeys(addressEmployee, "Jamaica Ny");
	 click(submitEmployee);
	 
	 
	 
 }




}

