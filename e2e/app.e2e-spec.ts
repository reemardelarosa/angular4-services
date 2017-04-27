import { ServicesWipPage } from './app.po';

describe('services-wip App', function() {
  let page: ServicesWipPage;

  beforeEach(() => {
    page = new ServicesWipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
