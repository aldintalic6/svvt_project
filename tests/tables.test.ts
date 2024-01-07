import { HomePage } from "../core/page-objects/home-page";
import { TablesPage } from "../core/page-objects/tables-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let tablesPage: TablesPage;

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    tablesPage = new TablesPage(driver);
}, 5000);

test("tables", async () => {
    await homePage.clickOnTables();
    await tablesPage.clickFootball();
    await tablesPage.clickCountry();
    await tablesPage.clickLeague();
    await tablesPage.assert();
}, 10000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)