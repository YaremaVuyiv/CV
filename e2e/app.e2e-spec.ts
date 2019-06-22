import { CVPage } from './app.po';

describe('cv App', function() {
  let page: CVPage;

  beforeEach(() => {
    page = new CVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
