const Page = require('./page');
class TimeSheetsPage extends Page {
  get title() {
    return $('.time-sheets_listSection__FOEjf > h2:nth-child(1)');
  }
  get table() {
    return $('.table_table__LagT9');
  }
  get descriptionTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1)');
  }
  get createdAtTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2)');
  }
  get startDateTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(3)');
  }
  get endTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(4)');
  }
  get hoursTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(5)');
  }
  get validatedTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(6)');
  }
  get editTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(7)');
  }
  get deleteTableTitle() {
    return $('.table_table__LagT9 > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(8)');
  }

  //Buttons
  get addBtn() {
    return $('.time-sheets_listSection__FOEjf > div:nth-child(2) > button:nth-child(1)');
  }
  get editBtn() {
    return $(
      '.table_table__LagT9 > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(7) > button:nth-child(1)'
    );
  }
  get deleteBtn() {
    return $(
      '.table_table__LagT9 > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(8) > button:nth-child(1)'
    );
  }
  get addModal() {
    return $('.modal_contenedorModal__8Nl8G');
  }

  //Methods
  open() {
    return super.open('time-sheets');
  }
}

module.exports = new TimeSheetsPage();
