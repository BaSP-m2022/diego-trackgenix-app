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
            it('Complete inputs with invalid information', async () => {
                await MainPage.completeInputs('', '','', '')
})
})
})
