import { HomePage } from "../core/page-objects/home-page";
import { FiltersPage } from "../core/page-objects/filters-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let filtersPage: FiltersPage;

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    filtersPage = new FiltersPage(driver);
}, 5000);

test("filters", async () => {
   await homePage.clickNovo();
   await filtersPage.clickDiskusije();
   await filtersPage.clickNajnovije();
   await filtersPage.clickNajcitanije()
   await filtersPage.clickDiskusije();
   await driver.sleep(3000);
}, 10000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)