import { browser, by, element } from 'protractor';

export class MetatronFrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('met-root h1')).getText();
  }
}
