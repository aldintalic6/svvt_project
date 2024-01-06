import { HomePage } from "../core/page-objects/home-page";
import { ClubsPage } from "../core/page-objects/clubs-page";
import { LoginPage } from "../core/page-objects/login-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let clubsPage: ClubsPage;
let loginPage: LoginPage;

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    clubsPage = new ClubsPage(driver);
}, 5000);

test("login", async () => {
    await homePage.clickOnLoginKey()
    await loginPage.fillInEmail();
    await loginPage.fillInPassword();
    await loginPage.clickToLogin();
}, 20000);

test("favorite-unfavorite-club", async () => {
    await homePage.clickOnProfile();
    await homePage.clickOnClubs();
    await clubsPage.clickToChoose();
    await clubsPage.clickOnFootball();
    await clubsPage.scrollDown();
    await clubsPage.clickOnCountry();
    await clubsPage.clickOnEngland();
    await clubsPage.clickOnLeague();
    await clubsPage.clickOnPremierLeague();
    await clubsPage.clickOnClub();
    await clubsPage.clickOnArsenal();
    await clubsPage.clickOnSubmit();
    await clubsPage.assertMessageFavorite();
    await clubsPage.clickOnUnfavorite();
    await driver.sleep(2000);
    await clubsPage.assertMessageUnFavorite();
}, 50000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)