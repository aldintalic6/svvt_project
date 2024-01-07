import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class TablesPage extends BasePage {
    private football_table = By.xpath("(//div[@class='ac text-base  bg-black bg-opacity-5 px-3 uppercase dark:bg-white dark:bg-opacity-20 rounded-md  dark:text-white'])[1]");
    private country = By.xpath("(//div[@class='ac-sub py-2'])[2]");
    private league = By.xpath("//a[@href='https://sportsport.ba/tabele-lige/fudbal/engleska/premier-league/7']");
    private club = By.xpath("//a[@href='https://sportsport.ba/klub/liverpool/97']");
constructor(driver: WebDriver) { 
			super(driver);
}

async clickFootball() {
    await this.findElementAndClick(this.football_table);
}
async clickCountry() {
    await this.findElementAndClick(this.country);
}
async clickLeague() {
    await this.findElementAndClick(this.league);
}
async assert() {
    await this.checkMatchingElements(this.club, testData.clubs.liverpool);
}
}
