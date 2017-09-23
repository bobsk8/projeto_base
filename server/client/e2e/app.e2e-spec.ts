import { ReformaPage } from './app.po';

describe('reforma App', () => {
  let page: ReformaPage;

  beforeEach(() => {
    page = new ReformaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
