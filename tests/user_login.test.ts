import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
}, 5000);

test("login", async () => {
    await homePage.clickOnLoginKey()
    await loginPage.fillInEmail();
    await loginPage.fillInPassword();
    await loginPage.clickToLogin();
    await homePage.clickOnProfile();
    await homePage.clickOnProfile2();
}, 20000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)