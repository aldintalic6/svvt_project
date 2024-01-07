import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CommentsPage extends BasePage {
   private comment_field = By.id("comment-main");
   private submit_comment_button = By.xpath("(//button)[1]");
constructor(driver: WebDriver) { 
			super(driver);
}

async inputComment() {
    await this.fillInputField(this.comment_field, testData.comments.comment);
}
async submitComment() {
    await this.findElementAndClick(this.submit_comment_button);
}
}