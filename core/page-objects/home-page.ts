import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage extends BasePage {
	private loginKey = By.xpath("//a[@href='https://sportsport.ba/login']");
    private profil = By.id("user-profile-btn");
    private profil2 = By.linkText("UREDI PROFIL");
    private clubs = By.linkText("MOJI KLUBOVI");
    private article = By.xpath("(//article[@class='w-full block h-full flex md:block p-2'])[2]");
    private access_tables = By.linkText("TABELE");
    private novo = By.linkText("NOVO");
    private search_bar = By.id("search-input");
    private search_button = By.xpath("//button[@aria-label='Pretraga']");
    private search_heading = By.xpath("//h1[@class='font-bold leading-tight md:text-3xl text-5xl dark:text-white']");
    private forum_access = By.xpath('//*[@id="body"]/header/div/div/div[1]/div[2]/div/a[4]/span');
    private mode_toggle = By.xpath("//label[@for='toggle-page' and class='cursor-pointer']");
constructor(driver: WebDriver) { 
			super(driver);
}

async clickOnLoginKey() {
    await this.findElementAndClick(this.loginKey);
}
async clickOnProfile() {
    await this.findElementAndClick(this.profil);
}
async clickOnProfile2() {
    await this.findElementAndClick(this.profil2);
}
async clickOnClubs() {
    await this.findElementAndClick(this.clubs);
}
async clickOnForum() {
    await this.findElementAndClick(this.forum_access);
}
async fillSearchBar() {
    await this.fillInputField(this.search_bar, testData.search.news);
}
async clickSearchButton() {
    await this.findElementAndClick(this.search_button);
}
async assertSearchHeading() {
    await this.checkMatchingElements(this.search_heading, testData.assert.search_heading);
}
async scrollToArticle() {
    await this.scrollToElement(this.article);
}
async scrollThroughPage() {
    await this.scroll(1500);
}
async clickOnArticle() {
    await this.findElementAndClick(this.article);
}
async clickOnTables() {
    await this.findElementAndClick(this.access_tables);
}
async clickNovo() {
    await this.findElementAndClick(this.novo);
}
async clickOnToggle() {
    await this.findElementAndClick(this.mode_toggle);
}

}