import { HomePage } from "../core/page-objects/home-page";
import { ForumPage } from "../core/page-objects/forum-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let forumPage: ForumPage;

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    forumPage = new ForumPage(driver);
}, 5000);

test("search_news", async () => {
    await homePage.clickOnForum();
    await forumPage.clickLeague();
    await forumPage.clickClub();
    await forumPage.clickForum();
    await driver.sleep(3000);
}, 10000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)