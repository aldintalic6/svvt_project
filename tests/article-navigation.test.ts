import { HomePage } from "../core/page-objects/home-page";
import { ArticlePage } from "../core/page-objects/article-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let articlePage: ArticlePage;

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    articlePage = new ArticlePage(driver);
}, 5000);

test("article_navigation", async () => {
    await homePage.scrollToArticle();
    await homePage.clickOnArticle();
    await articlePage.scrollThroughArticle();
}, 20000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)