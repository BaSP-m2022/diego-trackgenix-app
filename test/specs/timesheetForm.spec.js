const TimeSheetsPage = require('../pageobjects/timesheet.page');
const TimeSheetsFormPage = require('../pageobjects/timesheetForm.page');
beforeAll('Open modal', async () => {
    await TimeSheetsPage.open();
    await TimeSheetsPage.addBtn.click();
  });
// describe('modal buttons', () => {
//   it('Buttons Test', async () => {
//     await expect(TimeSheetsFormPage.addBtn).toBeDisplayed();
//     await expect(TimeSheetsFormPage.addBtn).toBeClickable();
//     await expect(TimeSheetsFormPage.editBtn).toBeDisplayed();
//     await expect(TimeSheetsFormPage.editBtn).toBeClickable();
//     await expect(TimeSheetsFormPage.deleteBtn).toBeDisplayed();
//     await expect(TimeSheetsFormPage.deleteBtn).toBeClickable();
//   });
  describe('Add modal timesheet', () => {
  it('Add timesheet modal', async () => {
    // await TimeSheetsPage.addBtn.click();
    await expect(TimeSheetsFormPage.addModalBtn).toBeDisplayed();
    await expect(TimeSheetsFormPage.addModalBtn).toBeClickable();
  });
});

