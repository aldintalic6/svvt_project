import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegisterPage extends BasePage {
	private username_field = By.id("username");
    private email_field = By.id("email");
    private password_field = By.id("password");
    private password_field2 = By.id("password_confirmation");
    private captcha_checkbox = By.className("recaptcha-checkbox-checkmark");
    private submit_registration = By.xpath("(//button)[1]")
constructor(driver: WebDriver) { 
			super(driver);
}

async inputUsername() {
    await this.fillInputField(this.username_field, testData.credentials.register_username);
}
async inputEmail() {
    await this.fillInputField(this.email_field, testData.credentials.register_email);
}
async inputPassword() {
    await this.fillInputField(this.password_field, testData.credentials.register_password);
}
async inpuPassword2() {
    await this.fillInputField(this.password_field2, testData.credentials.register_password);
}
async closeCaptcha() {
    await this.findElementAndClick(this.captcha_checkbox);
}
async submitRegistration() {
    await this.findElementAndClick(this.submit_registration);
}
}