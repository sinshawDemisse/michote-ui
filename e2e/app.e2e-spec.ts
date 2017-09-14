import { MichoteUiPage } from './app.po';

describe('michote-ui App', () => {
  let page: MichoteUiPage;

  beforeEach(() => {
    page = new MichoteUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
