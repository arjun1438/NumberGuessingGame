import { NumberGuessingGamePage } from './app.po';

describe('number-guessing-game App', function() {
  let page: NumberGuessingGamePage;

  beforeEach(() => {
    page = new NumberGuessingGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
