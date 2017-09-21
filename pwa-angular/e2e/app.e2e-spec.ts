import { PwaAngularPage } from './app.po';

describe('pwa-angular App', () => {
  let page: PwaAngularPage;

  beforeEach(() => {
    page = new PwaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
