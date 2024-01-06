import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {
	private email_field = By.id("email");
    private password_field = By.id("password");
    private click_to_login = By.className("bg-black bg-opacity-5 w-full hover:bg-red-600 hover:text-white px-4 py-2 font-trebuchet rounded-md text-md uppercase font-normal dark:bg-white dark:bg-opacity-20 h-10.5 flex justify-center items-center transition-all");
    private register_button = By.xpath("//a[@href='https://sportsport.ba/register']");
constructor(driver: WebDriver) { 
			super(driver);
}

async fillInEmail() {
    await this.fillInputField(this.email_field, testData.credentials.email);
}
async fillInPassword() {
    await this.fillInputField(this.password_field, testData.credentials.password);
}
async clickToLogin() {
    await this.findElementAndClick(this.click_to_login);
}
async clickRegisterButton() {
    await this.findElementAndClick(this.register_button);
}
}