import { HomePage } from "../core/page-objects/home-page";
import { LoginPage } from "../core/page-objects/login-page";
import { ArticlePage } from "../core/page-objects/article-page";
import { CommentsPage } from "../core/page-objects/comments-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let articlePage: ArticlePage;
let commentsPage: CommentsPage;

beforeAll(async () => {
    driver = await createDriver(testData.urls.sportsporthome);
    homePage = new HomePage(driver);
    articlePage = new ArticlePage(driver);
    loginPage = new LoginPage(driver);
    commentsPage = new CommentsPage(driver);
}, 5000);

test("commenting", async () => {
    await homePage.clickOnLoginKey()
    await loginPage.fillInEmail();
    await loginPage.fillInPassword();
    await loginPage.clickToLogin();
}, 20000);

test("comment-article", async () => {
    await homePage.scrollToArticle();
    await homePage.clickOnArticle();
    await articlePage.scrollToComment();
    await articlePage.clickOnComment();
    await commentsPage.inputComment();
    await commentsPage.submitComment();
    await driver.sleep(3000);
}, 20000);

afterAll(async () => {
    await quitDriver(driver)
}, 5000)