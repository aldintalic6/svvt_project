import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ArticlePage extends BasePage {
    private comment_section = By.xpath("//a[@class='bg-black bg-opacity-70 text-white hover:bg-red-600 hover:text-white px-5 py-2 font-trebuchet rounded-md uppercase text-md font-normal w-full text-center dark:bg-white dark:bg-opacity-20 h-10.5 flex items-center justify-center']");
constructor(driver: WebDriver) { 
			super(driver);
}

async scrollThroughArticle() {
    await this.scroll(1000);
}
async scrollToComment() {
    await this.scrollToElement(this.comment_section);
}
async clickOnComment() {
    await this.findElementAndClick(this.comment_section);
}
}