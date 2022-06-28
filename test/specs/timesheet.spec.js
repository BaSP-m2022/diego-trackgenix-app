const TimeSheetsPage = require('../pageobjects/timesheet.page');

beforeAll('Open Browser', async () => {
  await TimeSheetsPage.open();
});
afterEach('Refresh page', async () => {
  browser.url('https://diego-trackgenix-app.vercel.app/time-sheets');
});

describe('Timesheet visual objects', () => {
  it('Test titles', async () => {
    await expect(TimeSheetsPage.title).toBeDisplayed();
    await expect(TimeSheetsPage.table).toBeDisplayed();
    await expect(TimeSheetsPage.descriptionTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.descriptionTableTitle).toHaveText('Description');
    await expect(TimeSheetsPage.createdAtTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.createdAtTableTitle).toHaveText('Created At');
    await expect(TimeSheetsPage.startDateTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.startDateTableTitle).toHaveText('Start Date');
    await expect(TimeSheetsPage.endTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.endTableTitle).toHaveText('End Date');
    await expect(TimeSheetsPage.hoursTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.hoursTableTitle).toHaveText('Hours');
    await expect(TimeSheetsPage.validatedTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.validatedTableTitle).toHaveText('Validated');
    await expect(TimeSheetsPage.editTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.editTableTitle).toHaveText('Edit');
    await expect(TimeSheetsPage.deleteTableTitle).toBeDisplayed();
    await expect(TimeSheetsPage.deleteTableTitle).toHaveText('Delete');
  });
  it('Buttons Test', async () => {
    await expect(TimeSheetsPage.addBtn).toBeDisplayed();
    await expect(TimeSheetsPage.addBtn).toBeClickable();
    await expect(TimeSheetsPage.editBtn).toBeDisplayed();
    await expect(TimeSheetsPage.editBtn).toBeClickable();
    await expect(TimeSheetsPage.deleteBtn).toBeDisplayed();
    await expect(TimeSheetsPage.deleteBtn).toBeClickable();
  });
});
describe('Add timesheet', () => {
  it('Add timesheet modal', async () => {
    await TimeSheetsPage.addBtn.click();
    await expect(TimeSheetsPage.addModal).toBeDisplayed();
    await expect(TimeSheetsPage.addModalBtn).toBeDisplayed();
    await expect(TimeSheetsPage.addModal).toBeClickable();
    await expect(TimeSheetsPage.cancelModalBtn).toBeDisplayed();
    await expect(TimeSheetsPage.cancelModalBtn).toBeClickable();
  });
});
