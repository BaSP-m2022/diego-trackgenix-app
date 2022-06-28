const TasksPage = require('../pageobjects/task.page');

beforeAll('Open Browser', async () => {
  await TasksPage.open();
});
afterEach('Refresh page', async () => {
  TasksPage.open();
});

describe('Timesheet visual objects', () => {
  it('Test titles', async () => {
    await expect(TasksPage.title).toBeDisplayed();
    await expect(TasksPage.table).toBeDisplayed();
    await expect(TasksPage.descriptionTableTitle).toBeDisplayed();
    await expect(TasksPage.descriptionTableTitle).toHaveText('Description');
    await expect(TasksPage.workedHoursTableTitle).toBeDisplayed();
    await expect(TasksPage.workedHoursTableTitle).toHaveText('Worked Hours');
    await expect(TasksPage.dateTableTitle).toBeDisplayed();
    await expect(TasksPage.dateTableTitle).toHaveText('Date');
    await expect(TasksPage.editTableTitle).toBeDisplayed();
    await expect(TasksPage.editTableTitle).toHaveText('Edit');
    await expect(TasksPage.deleteTableTitle).toBeDisplayed();
    await expect(TasksPage.deleteTableTitle).toHaveText('Delete');
  });
  it('Buttons Test', async () => {
    await expect(TasksPage.addBtn).toBeDisplayed();
    await expect(TasksPage.addBtn).toBeClickable();
    await expect(TasksPage.editBtn).toBeDisplayed();
    await expect(TasksPage.editBtn).toBeClickable();
    await expect(TasksPage.deleteBtn).toBeDisplayed();
    await expect(TasksPage.deleteBtn).toBeClickable();
  });
});
