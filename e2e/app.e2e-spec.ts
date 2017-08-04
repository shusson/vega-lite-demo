import { VegaLiteDemoPage } from './app.po';

describe('vega-lite-demo App', () => {
  let page: VegaLiteDemoPage;

  beforeEach(() => {
    page = new VegaLiteDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
