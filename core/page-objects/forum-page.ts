import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ForumPage extends BasePage {
   private access_premijer_liga = By.linkText("Premijer liga BiH");
   private fksarajevo = By.linkText("FK Sarajevo");
   private enter_forum = By.xpath("//a[@href='./viewtopic.php?f=98&t=16066']");
constructor(driver: WebDriver) { 
			super(driver);
}

async clickLeague() {
    await this.findElementAndClick(this.access_premijer_liga);
}
async clickClub() {
    await this.findElementAndClick(this.fksarajevo);
}
async clickForum() {
    await this.findElementAndClick(this.enter_forum);
}
}
