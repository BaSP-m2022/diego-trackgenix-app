const Page = require('./page');
class TimeSheetsFormPage extends Page {
  get cancelModalBtn() {
    return $('.time-sheets_btnModalContainer__DcL5f > button:nth-child(1)');
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
}

module.exports = new TimeSheetsFormPage();
