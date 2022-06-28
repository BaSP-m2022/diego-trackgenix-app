const Page = require('./page');
class TasksPage extends Page {
  get title() {
    return $('.header_tittle__9z1h2');
  }
  get table() {
    return $('.table_table__LagT9');
  }
  get descriptionTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1)');
  }
  get workedHoursTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2)');
  }
  get dateTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(3)');
  }
  get editTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(4)');
  }
  get deleteTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(5)');
  }

  //Buttons
  get addBtn() {
    return $('div.tasks_container__tvidq:nth-child(1) > button:nth-child(1)');
  }
  get editBtn() {
    return $(
      '.table_table__LagT9 > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > button:nth-child(1)'
    );
  }
  get deleteBtn() {
    return $(
      '.table_table__LagT9 > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5) > button:nth-child(1)'
    );
  }

  //Methods
  open() {
    return super.open('tasks');
  }
}

module.exports = new TasksPage();
