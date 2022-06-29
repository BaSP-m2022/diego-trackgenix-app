const ProjectsPage = require('../pageobjects/projects.page')

describe('Automation Test in PROJECT Entitie', () => {
    beforeAll('Open browser', async () => {
        browser.url('https://diego-trackgenix-app.vercel.app/projects')
    })
    describe('Check if buttons are clickable', () => {
        it('Verify button Add', async () => {
            await expect(ProjectsPage.addUserBtn).toBeClickable()
        })
        it('Verify button Edit', async () => {
            await expect(ProjectsPage.editBtn).toBeClickable()
        })
        it('Verify button Delete', async () => {
            await expect(ProjectsPage.deleteBtn).toBeClickable()
        })
        it('Verify Entitie Project in Navbar', async () => {
            await expect(ProjectsPage.projectBtn).toBeClickable()
        })
        it('Verify Instagram button', async () => {
            await expect(ProjectsPage.instagraminBtn).toBeClickable()
        })
        it('Verify Facebook button', async () => {
            await expect(ProjectsPage.fbBtn).toBeClickable()
        })
        it('Verify Twitter button', async () => {
            await expect(ProjectsPage.twitterBtn).toBeClickable()
        })
    })
    describe('Check if all visual elements are displayed', () => {
        it('Verify Main header', async () => {
            await expect(ProjectsPage.primaryHeader).toBeDisplayed()
        })
        it('Verify Table of contents', async () => {
            await expect(ProjectsPage.mainTable).toBeDisplayed()
        })
        it('Verify icon of Button Add', async () => {
            await expect(ProjectsPage.addUserBtn).toBeDisplayed()
        })
        it('Verify icon of Button Delete', async () => {
            await expect(ProjectsPage.deleteBtn).toBeDisplayed()
        })
        it('Verify icon of Button Edit', async () => {
            await expect(ProjectsPage.editBtn).toBeDisplayed()
        })
    })
    describe('Add a Project', () => {
        it('Enter to form page', async () => {
            await ProjectsPage.AddUser()
        })
        it('Close form page using cross', async () => {
            await ProjectsPage.closeFormPage()
        })
        it('Enter to form page again', async () => {
            await ProjectsPage.AddUser()
        })
        it('Complete inputs with correctly information', async () => {
            await ProjectsPage.completeInputs('Testing', 'TestingNicotesting', 'QA testing', '10/10/2000', '10/12/2000')
        })

        it('Close modal confirmation', async () => {
            await ProjectsPage.confirmUser()
        })
    })

    describe('Edit user', () => {
        it('Enter to section edit', async () => {
            await ProjectsPage.openEdit()
        })
        it('Close section edit using cross ', async () => {
            await ProjectsPage.closeFormPage()
        })
        it('Enter to section edit', async () => {
            await ProjectsPage.openEdit()
        })
        it('Complete inputs with valid information', async () => {
            await ProjectsPage.completeInputs('Testing', 'TestingNicotesting', 'QA testing', '05/02/2010', '08/12/2019')
        })

        it('Close modal confirmation', async () => {
            await ProjectsPage.confirmUser()
        })
    })
    describe('Cancel Delete user', () => {
        it('Delete user', async () => {
            await ProjectsPage.deleteUser()
        })
        it('Cancel delete', async () => {
            await ProjectsPage.cancelDelete()
        })

    })
    describe('Delete user', () => {
        it('Delete user', async () => {
            await ProjectsPage.deleteUser()
        })
        it('Confirmation to delete', async () => {
            await ProjectsPage.confirmDeleteProject()
        })
        it('Close modal confirmation', async () => {
            await ProjectsPage.confirmUser()
        })
    })
    describe('Check error msgs with wrong data', () => {
        it('Enter to form page', async () => {
            await ProjectsPage.AddUser()
        })
        it('add User', async () => {
            await ProjectsPage.sendForm()
        })
        it('Should msg error with First name Invalid', async () => {
            await ProjectsPage.setFirstName('');
            await expect(ProjectsPage.msgErrorfirstName).toHaveText('"name" is not allowed to be empty')
            await ProjectsPage.setFirstName('Ni');
            await expect(ProjectsPage.msgErrorfirstName).toHaveText('"name" length must be at least 3 characters long')
        })
        it('Should msg error with Description Invalid', async () => {
            await ProjectsPage.setDescription('');
            await expect(ProjectsPage.msgErrorDescription).toHaveText('"description" is not allowed to be empty')
            await ProjectsPage.setDescription('La');
            await expect(ProjectsPage.msgErrorDescription).toHaveText('"description" length must be at least 5 characters long')
        })
        it('Should msg error with Client Invalid', async () => {
            await ProjectsPage.setClient('');
            await expect(ProjectsPage.msgErrorClient).toHaveText('"client" is not allowed to be empty')
        })
        it('Should msg error with Start Date Wrong', async () => {
            await ProjectsPage.setStart('');
            await expect(ProjectsPage.starDateErrorMsg).toHaveText('"startDate" must be a valid date')

        })
        it('Should msg error with End Date Wrong', async () => {
            await ProjectsPage.setEnd('');
            await expect(ProjectsPage.endDateErrorMsg).toHaveText('"endDate" must be a valid date')

        })
        it('Close form page using cross', async () => {
            await ProjectsPage.closeFormPage()
        })
    })
})
