import { HomePage } from "../core/page-objects/home-page";
import { RegisterPage } from "../core/page-objects/register-page";
import { LoginPage } from "../core/page-objects/login-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let registerPage: RegisterPage;
let loginPage: LoginPage

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    registerPage = new RegisterPage(driver);
    loginPage = new LoginPage(driver);
}, 5000);

test("register", async () => {
    await homePage.clickOnLoginKey();
    await loginPage.clickRegisterButton();
    await registerPage.inputUsername();
    await registerPage.inputEmail();
    await registerPage.inputPassword();
    await registerPage.inpuPassword2();
    await registerPage.closeCaptcha();
    await registerPage.submitRegistration();
}, 20000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)