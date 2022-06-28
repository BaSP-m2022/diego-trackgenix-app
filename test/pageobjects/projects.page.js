class ProjectsPage {
    get addUserBtn () {return $('#root > div > section > div > button')}
    get firstNameInput () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(1) > div:nth-child(1) > input')}
    get descriptionInput () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(1) > div:nth-child(2) > input')} 
    get clientInput () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(1) > div:nth-child(3) > input')}
    get startDate () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(2) > div:nth-child(1) > input')}
    get endDate () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(2) > div:nth-child(2) > input')}
    get sendFormBtn () {return $('#projectForm > div.manageItem_buttonConteiner__pLc-e > button')}
    get closeForm () {return $('#root > div > section > div > div.modal_overlay__Nah-X > div > div.modal_buttonContainer__zVa22 > button')}
    get confirmForm () {return $('#root > div > section > div > div.modal_overlay__Nah-X > div > button')}
    get primaryHeader () {return $('#root > div > header > div')}
    get navBarMain () {return $('#root > div > header > nav')}
    get projectBtn () {return $('#root > div > header > nav > ul > li:nth-child(2) > a')}
    get twitterBtn () {return $('a:nth-child(2) > img')}
    get fbBtn () {return $('a:nth-child(1) > img')}
    get instagraminBtn () {return $('a:nth-child(3) > img')}
    get mainFooter () {return $('div.footer_main__nwLSQ')}
    get secondFooter () {return $('div.footer_license__uvxSL')}
    get editBtn () {return $('#root > div > section > div > div > table > tbody > tr:nth-child(1) > td:nth-child(6) > button')}
    get deleteBtn () {return $('#root > div > section > div > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > button')}
    get okModalBtn () {return $('#root > div > section > div.modal_overlay__Nah-X > div > button')}
    get closeModalBtn () {return $('#root > div > section > div.modal_overlay__Nah-X > div > div > button > svg')}
    get mainTable () {return $('#root > div > section > div > div > table')}
    get msgErrorfirstName () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(1) > div:nth-child(1) > p')}
    get msgErrorDescription () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(1) > div:nth-child(2) > p')}
    get msgErrorClient () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(1) > div:nth-child(3) > p')}
    get starDateErrorMsg () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(2) > div:nth-child(1) > p')}
    get endDateErrorMsg () {return $('#projectForm > div.manageItem_inputConteiner__YYGbP > div:nth-child(2) > div:nth-child(2) > p')}
    get closeFormBtn () {return $('#root > div > section > div > div.modal_overlay__Nah-X > div > div.modal_buttonContainer__zVa22 > button')}
    get confirmDelete () {return $('#root > div > section > div > div.modal_overlay__Nah-X > div > div.projects_modalActions__hahG9 > div > button:nth-child(1)')}
    get cancelButtonDelete () {return $('#root > div > section > div > div.modal_overlay__Nah-X > div > div.projects_modalActions__hahG9 > div > button:nth-child(2)')}
    
    
    async confirmUser (){
        await this.confirmForm.click();
    }
    
    async cancelDelete () {
        await this.cancelButtonDelete.click();
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
    
    async setDescription(description) {
        await this.descriptionInput.setValue(description);
    }
    
    async setClient(client) {
        await this.clientInput.setValue(client);
    }
    
    async setStart(startDate) {
        await this.startDate.setValue(startDate);
    }

    async setEnd(endDate) {
        await this.endDate.setValue(endDate);
    }
    
    async sendForm () {
        await this.sendFormBtn.click();
    }

    async completeInputs (FirstName, description, client, startDate, endDate ) {
        await this.setFirstName(FirstName);
        await this.setDescription(description);
        await this.setClient(client);
        await this.setStart(startDate);
        await this.setEnd(endDate);
        await this.sendFormBtn.click();
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
    
    async confirmDeleteProject () {
        await this.confirmDelete.click();
    }




}

module.exports = new ProjectsPage();