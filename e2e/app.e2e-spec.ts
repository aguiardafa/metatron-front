import { MetatronFrontPage } from './app.po';

describe('metatron-front App', () => {
  let page: MetatronFrontPage;

  beforeEach(() => {
    page = new MetatronFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to met!!');
  });
});
