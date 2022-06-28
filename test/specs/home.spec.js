const HomePage = require('../pageobjects/home.page');

describe('Home Page visual elements', () => {
  beforeAll('Open Browser', () => {
    HomePage.open();
  });
  it('text elements displayed', async () => {
    await expect(HomePage.header).toBeDisplayed;
    await expect(HomePage.header).toHaveText('Radium Rocket');
    await expect(HomePage.title).toBeDisplayed;
    await expect(HomePage.title).toHaveText('TrackGENIX');
    await expect(HomePage.facebook).toBeDisplayed();
    await expect(HomePage.twitter).toBeDisplayed();
    await expect(HomePage.instagram).toBeDisplayed();
    await expect(HomePage.footer1).toBeDisplayed();
    await expect(HomePage.footer2).toBeDisplayed();
  });
  it('social media test', async () => {
    await expect(HomePage.facebook).toBeDisplayed();
    await expect(HomePage.facebook).toBeClickable();
    await expect(HomePage.facebook).toHaveHref('https://www.facebook.com/radiumrocket');
    const fbimg = await HomePage.facebookImg.getAttribute('src');
    await expect(fbimg).toBe('/assets/images/facebook.svg');
    await expect(HomePage.twitter).toBeDisplayed();
    await expect(HomePage.twitter).toBeClickable();
    await expect(HomePage.twitter).toHaveHref('https://twitter.com/radiumrocket');
    const twImg = await HomePage.twitterImg.getAttribute('src');
    await expect(twImg).toBe('/assets/images/twitter.svg');
    await expect(HomePage.instagram).toBeDisplayed();
    await expect(HomePage.instagram).toBeClickable();
    await expect(HomePage.instagram).toHaveHref('https://www.instagram.com/radium.rocket/');
    const igimg = await HomePage.instagramImg.getAttribute('src');
    await expect(igimg).toBe('/assets/images/instagram.svg');
  });
  it('entities btns', async () => {
    await expect(HomePage.adminsBtn).toBeClickable();
    await expect(HomePage.adminsBtn).toBeClickable();
    await expect(HomePage.superAdminsBtn).toBeDisplayed();
    await expect(HomePage.superAdminsBtn).toBeClickable();
    await expect(HomePage.employeeBtn).toBeDisplayed();
    await expect(HomePage.employeeBtn).toBeClickable();
    await expect(HomePage.projectsBtn).toBeDisplayed();
    await expect(HomePage.projectsBtn).toBeClickable();
    await expect(HomePage.timesheetBtn).toBeDisplayed();
    await expect(HomePage.timesheetBtn).toBeClickable();
    await expect(HomePage.taskBtn).toBeDisplayed();
    await expect(HomePage.taskBtn).toBeClickable();
  });
});
