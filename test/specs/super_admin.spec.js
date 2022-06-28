const MainPage = require('../pageobjects/super_admin.page')

describe('Automation Test in SUPER ADMIN Entitie', () => {
    beforeAll('Open browser', async () => {
        browser.url('https://diego-trackgenix-app.vercel.app/super-admins')
    })
        describe('Check if buttons are clickable', () => {
            it('Verify button Add', async () => {
                await expect(MainPage.addUserBtn).toBeClickable()
            })
            it('Verify button Edit', async () => {
                await expect(MainPage.editBtn).toBeClickable()
            })
            it('Verify button Delete', async () => {
                await expect(MainPage.deleteBtn).toBeClickable()
            })
            it('Verify Entitie SuperAdmin in Navbar', async () => {
                await expect(MainPage.superAdminBtn).toBeClickable()
            })
            it('Verify Instagram button', async () => {
                await expect(MainPage.instagraminBtn).toBeClickable()
            })
            it('Verify Facebook button', async () => {
                await expect(MainPage.fbBtn).toBeClickable()
            })
            it('Verify Twitter button', async () => {
                await expect(MainPage.twitterBtn).toBeClickable()
            })
        })
        describe('Check if all visual elements are displayed', () => {
            it('Verify Main header', async () => {
                await expect(MainPage.primaryHeader).toBeDisplayed()
            })
            it('Verify Table of contents', async () => {
                await expect(MainPage.mainTable).toBeDisplayed()
            })
            it('Verify icon of Button Add', async () => {
                await expect(MainPage.addUserBtn).toBeDisplayed()
            })
            it('Verify icon of Button Delete', async () => {
                await expect(MainPage.deleteBtn).toBeDisplayed()
            })
            it('Verify icon of Button Edit', async () => {
                await expect(MainPage.editBtn).toBeDisplayed()
            })
            
    })
        describe('Add a user', () => {
            it('Enter to form page', async () => {
                await MainPage.AddUser()
            })
            it('Close form page using cross', async () => {
                await MainPage.closeFormPage()
            })
            it('Enter to form page again', async () => {
                await MainPage.AddUser()
            })
            it('Complete inputs with correctly information', async () => {
                await MainPage.completeInputs('Testing', 'TestingNico','nicotester@qa.com', 'asdasd123123')
            })
            it('Close modal confirmation', async () => {
                await MainPage.closeModal()
            })
    })
        describe('Edit user', () => {
            it('Enter to section edit', async () => {
                await MainPage.openEdit()
            })
            it('Close section edit using cross ', async () => {
                await MainPage.closeFormPage()
            })
            it('Enter to section edit', async () => {
                await MainPage.openEdit()
            })
            it('Complete inputs with valid information', async () => {
                await MainPage.completeInputs('Charly', 'Alberti','charly@gmail.com', 'charlysoda123')
            })
            it('Close modal confirmation', async () => {
                await MainPage.closeModal()
            })
})

        describe('Delete user', () => {
            it('Delete user', async () => {
                await MainPage.deleteUser()
            })
            it('Confirmation to delete', async () => {
                await MainPage.okModal()
            }) 
            it('Close modal confirmation', async () => {
                await MainPage.okModal()
            })      
})

        describe('Check if can access social networks', () => {
            it('Enter to Facebook', async () => {
                await MainPage.enterFb()
            })
            it('Enter to Twitter', async () => {
                await MainPage.enterTw()
            })
            it('Enter to Instagram', async () => {
                await MainPage.enterIt()
            })
})
        describe('Check error msgs with wrong data', () => {
            it('Enter to form page', async () => {
                await MainPage.AddUser()
            })
            
            it('add User', async () => {
                await MainPage.confirmUser()
            })
            it('Should msg error with First name Invalid', async () => {
                await MainPage.setFirstName('###');
                await expect(MainPage.msgErrorfirstName).toHaveText('There are invalid characters')
                await MainPage.setFirstName('Ni');
                await expect(MainPage.msgErrorfirstName).toHaveText('First name should have at least 3 characters')
            })
            it('Should msg error with Last name Invalid', async () => {
                await MainPage.setLastName('###');
                await expect(MainPage.msgErrorLastName).toHaveText('There are invalid characters')
                await MainPage.setLastName('La');
                await expect(MainPage.msgErrorLastName).toHaveText('Last name should have at least 3 characters')
            })
            it('Should msg error with Email Invalid', async () => {
                await MainPage.setEmail('$$$$');
                await expect(MainPage.msgErrorEmail).toHaveText('Email format it is not valid')
            })
            it('Should msg error with Password Invalid', async () => {
                await MainPage.setPassword('$$$$');
                await expect(MainPage.passwrodErrorCharacters).toHaveText('Password should have at least 8 characters')
                await MainPage.setPassword('asdasdasdasdasd');
                await expect(MainPage.passwrodErrorCharacters).toHaveText('Should be alphanumeric')
            })
        })
})
