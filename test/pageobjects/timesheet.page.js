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

  //Add modal
  get addModal() {
    return $('.modal_contenedorModal__8Nl8G');
  }
  get cancelModalBtn() {
    return $('.modal_buttonContainer__zVa22 > button:nth-child(1)');
  }
  get addModalBtn() {
    return $('button.buttons_button__yCkZL:nth-child(2)');
  }
  get descriptionInput() {
    return $('div.input_inputContainer__3Go9J:nth-child(1) > input:nth-child(2)');
  }
  get hoursInput() {
    return $('div.input_inputContainer__3Go9J:nth-child(2) > input:nth-child(2)');
  }
  get startInput() {
    return $('div.input_inputContainer__3Go9J:nth-child(3) > input:nth-child(2)');
  }
  get endInput() {
    return $('div.input_inputContainer__3Go9J:nth-child(4) > input:nth-child(2)');
  }
  get projectsInput() {
    return $('div.dropdown_dropdownContainer__umukq:nth-child(1) > select:nth-child(2)');
  }
  get employeesInput() {
    return $('div.dropdown_dropdownContainer__umukq:nth-child(2) > select:nth-child(2)');
  }
  get tasksInput() {
    return $('div.dropdown_dropdownContainer__umukq:nth-child(3) > select:nth-child(2)');
  }
  get validatedInput() {
    return $('div.dropdown_dropdownContainer__umukq:nth-child(3) > select:nth-child(2)');
  }

  //Edit modal

  //Methods
  open() {
    return super.open('time-sheets');
  }
}

module.exports = new TimeSheetsPage();
