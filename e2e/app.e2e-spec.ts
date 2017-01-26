import { ZombieCatPage } from './app.po';

describe('zombie-cat App', function() {
  let page: ZombieCatPage;

  beforeEach(() => {
    page = new ZombieCatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
