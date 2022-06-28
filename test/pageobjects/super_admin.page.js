class MainPage {
    get addUserBtn () {return $('#root > div > section > button > svg')}
    get firstNameInput () {return $('div:nth-child(1) > input')}
    get lastNameInput () {return $('div:nth-child(2) > input')} 
    get emailInput () {return $(' div:nth-child(3) > input')}
    get passwordInput () {return $('div:nth-child(4) > input')}
    get confirmBtn () {return $('#root > div > section > div.modal_overlay__Nah-X > div > form > button > svg')}
    get closeFormBtn () {return $('#root > div > section > div.modal_overlay__Nah-X > div > div > button')}
    get primaryHeader () {return $('#root > div > header > div')}
    get navBarMain () {return $('#root > div > header > nav')}
    get superAdminBtn () {return $('#root > div > header > nav > ul > li:nth-child(2) > a')}
    get twitterBtn () {return $('a:nth-child(2) > img')}
    get fbBtn () {return $('a:nth-child(1) > img')}
    get instagraminBtn () {return $('a:nth-child(3) > img')}
    get mainFooter () {return $('div.footer_main__nwLSQ')}
    get secondFooter () {return $('div.footer_license__uvxSL')}
    get editBtn () {return $('#root > div > section > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > button > svg')}
    get deleteBtn () {return $('#root > div > section > div > table > tbody > tr:nth-child(2) > td:nth-child(6) > button > svg')}
    get okModalBtn () {return $('#root > div > section > div.modal_overlay__Nah-X > div > button')}
    get closeModalBtn () {return $('#root > div > section > div.modal_overlay__Nah-X > div > div > button > svg')}
    get mainTable () {return $('#root > div > section > div > table')}
    get msgErrorfirstName () {return $('#root > div > section > div.modal_overlay__Nah-X > div > form > div:nth-child(1) > p')}
    get msgErrorLastName () {return $('#root > div > section > div.modal_overlay__Nah-X > div > form > div:nth-child(2) > p')}
    get msgErrorEmail () {return $('#root > div > section > div.modal_overlay__Nah-X > div > form > div:nth-child(3) > p')}
    get passwrodErrorCharacters () {return $('#root > div > section > div.modal_overlay__Nah-X > div > form > div:nth-child(4) > p')}
   
    
  
// Setters

async confirmUser (){
    await this.confirmBtn.click();
}

async okModal (){
    await this.okModalBtn.click();
}

async enterFb (){
    await this.fbBtn.click();
}
async enterTw (){
    await this.twitterBtn.click();
}
async enterIt (){
    await this.instagraminBtn.click();
}

async AddUser() {
    await this.addUserBtn.click();
}

async setFirstName(FirstName) {
    await this.firstNameInput.setValue(FirstName);
}

async setLastName(lastName) {
    await this.lastNameInput.setValue(lastName);
}

async setEmail(email) {
    await this.emailInput.setValue(email);
}

async setPassword(password) {
    await this.passwordInput.setValue(password);
}

async completeInputs (FirstName, lastName, email, password) {
    await this.setFirstName(FirstName);
    await this.setLastName(lastName);
    await this.setEmail(email);
    await this.setPassword(password);
    await this.confirmBtn.click();
}

async closeFormPage () {
    await this.closeFormBtn.click();
}

async openEdit () {
    await this.editBtn.click();
}

async deleteUser () {
    await this.deleteBtn.click();
}


async closeModal () {
    await this.closeModalBtn.click();
}


}

module.exports = new MainPage();