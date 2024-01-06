import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ClubsPage extends BasePage {
    private input_bar = By.id("input-sport");
    private football = By.xpath("//option[@value='1']");
    private drzava = By.id("input-residence");
    private engleska = By.xpath('//*[@id="input-residence"]/option[3]');
    private liga = By.id("input-league");
    private premierliga = By.xpath('//*[@id="input-league"]/option[2]');
    private club = By.id("input-club");
    private arsenal = By.xpath('//*[@id="input-club"]/option[2]');
    private submit_button = By.xpath("(//button[@type='submit'])[2]");
    private message_field = By.className("bg-green-100 border border-green-600 text-green-600 px-4 py-3 rounded-md relative mb-4");
    private unfavorite_button = By.xpath("//a[@data-id='101']");
    private message_field_unfavorite = By.xpath("(//div[@class='bg-green-100 border border-green-600 text-green-600 px-4 py-3 rounded-md relative mb-4'])[2]");
constructor(driver: WebDriver) { 
			super(driver);
}

async clickToChoose() {
    await this.findElementAndClick(this.input_bar);
}
async clickOnFootball() {
    await this.findElementAndClick(this.football);
}
async scrollDown() {
    await this.scroll(1000);
}
async clickOnCountry() {
    await this.findElementAndClick(this.drzava);
}
async clickOnEngland() {
    await this.findElementAndClick(this.engleska);
}
async clickOnLeague() {
    await this.findElementAndClick(this.liga);
}
async clickOnPremierLeague() {
    await this.findElementAndClick(this.premierliga);
}
async clickOnClub() {
    await this.findElementAndClick(this.club);
}
async clickOnArsenal() {
    await this.findElementAndClick(this.arsenal);
}
async clickOnSubmit() {
    await this.findElementAndClick(this.submit_button);
}
async assertMessageFavorite() {
    await this.checkMatchingElements(this.message_field, testData.messages.club_favorite);
}
async clickOnUnfavorite() {
    await this.findElementAndClick(this.unfavorite_button);
}
async assertMessageUnFavorite() {
    await this.checkMatchingElements(this.message_field_unfavorite, testData.messages.club_unfavorite);
}

}