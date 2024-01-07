import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class FiltersPage extends BasePage {
    private najcitanije = By.linkText("NAJČITANIJE");
    private diskusije = By.linkText("DISKUSIJE");
    private najnovije = By.linkText("NAJNOVIJE");
constructor(driver: WebDriver) { 
			super(driver);
}

async clickNajcitanije() {
    await this.findElementAndClick(this.najcitanije);
}
async clickDiskusije() {
    await this.findElementAndClick(this.diskusije);
}
async clickNajnovije() {
    await this.findElementAndClick(this.najnovije);
}
}
