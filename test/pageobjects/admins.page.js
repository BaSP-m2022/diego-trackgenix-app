class AdminPage {
        get addUserBtn () {return $('//*[@id="root"]/div/section/div[1]/div/button')}
        get firstNameInput () {return $(' div:nth-child(1) > div:nth-child(1) > input')}
        get lastNameInput () {return $(' div:nth-child(1) > div:nth-child(2) > input')} 
        get emailInput () {return $('div:nth-child(1) > div:nth-child(3) > input')}
        get passwordInput () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(2) > div.input_inputContainer__3Go9J > input')}
        get confirmBtn () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_modalButtons__kcDyM > button > svg')}
        get closeFormBtn () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > div > button')}
        get primaryHeader () {return $('#root > div > header > div')}
        get navBarMain () {return $('#root > div > header > nav')}
        get AdminBtn () {return $('#root > div > header > nav > ul > li:nth-child(1) > a')}
        get twitterBtn () {return $('a:nth-child(2) > img')}
        get fbBtn () {return $('a:nth-child(1) > img')}
        get instagraminBtn () {return $('a:nth-child(3) > img')}
        get mainFooter () {return $('div.footer_main__nwLSQ')}
        get secondFooter () {return $('div.footer_license__uvxSL')}
        get editBtn () {return $(' tr:nth-child(2) > td:nth-child(4) > button')}
        get deleteBtn () {return $('#root > div > section > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > button > svg')}
        get closeModalBtn () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > div.modal_buttonContainer__zVa22 > button')}
        get mainTable () {return $('#root > div > section > div:nth-child(2) > div')}
        get msgErrorfirstName () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(1) > div:nth-child(1) > p')}
        get msgErrorLastName () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(1) > div:nth-child(2) > p')}
        get msgErrorEmail () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(1) > div:nth-child(3) > p')}
        get genderInput () {return $('div:nth-child(2) > div:nth-child(1) > select')}
        get genderMale () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(2) > div:nth-child(1) > select > option:nth-child(2)')}
        get genderFemale () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(2) > div:nth-child(1) > select > option:nth-child(3)')}
        get genderPolyGender () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(2) > div:nth-child(1) > select > option:nth-child(4)')}
        get statusInput () {return $('div:nth-child(2) > div:nth-child(2) > select')}
        get statusTrue () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(2)')}
        get statusFalse () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(2) > div:nth-child(2) > select > option:nth-child(3)')}
        get passwrodErrorCharacters () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > form > div.admins_addModalContainer__2iNBH > div:nth-child(2) > div.input_inputContainer__3Go9J > p')}
        get closeModalConfirmation () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > div.modal_buttonContainer__zVa22 > button > svg')}
        get deleteConfirm () {return $('//*[@id="root"]/div/section/div[2]/div[1]/div/div[3]/button')}
        get closeFormEdit () {return $('#root > div > section > div:nth-child(2) > div.modal_overlay__Nah-X > div > div > button > svg')}
        //Setter

    async completeInputs (FirstName, lastName, email, password) {
        await this.setFirstName(FirstName);
        await this.setLastName(lastName);
        await this.setEmail(email);
        await this.setPassword(password);
        await this.genderInput.click();
        await this.genderMale.click();
        await this.genderInput.click();
        await this.statusInput.click();
        await this.statusTrue.click();
        await this.confirmBtn.click();
    }

    async openAddForm () {
        await this.addUserBtn.click();
    } 

    async confirmModal (){
        await this.closeModalConfirmation.click();
    }
    
    async closeFormEdit () {
        await this.closeFormEdit.click();
    }

    async closeForm () {
        await this.closeFormBtn.click();
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

    async openEdit () {
        await this.editBtn.click();
    }

    async deleteUser () {
        await this.deleteBtn.click();
    }

    async modalConfirmationDelete () {
        await this.deleteConfirm.click()
    }
    }

module.exports = new AdminPage();