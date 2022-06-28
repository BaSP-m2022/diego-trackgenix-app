// const AdminPage = require('../pageobjects/admins.page')

// describe('Automation Test in ADMIN Entitie', () => {
//     beforeAll('Open browser', async () => {
//         browser.url('https://diego-trackgenix-app.vercel.app/admins')
//     })
//         describe('Check if buttons are clickable', () => {
//             it('Verify button Add', async () => {
//                 await expect(AdminPage.addUserBtn).toBeClickable()
//             })
//             it('Verify button Edit', async () => {
//                 await expect(AdminPage.editBtn).toBeClickable()
//             })
//             it('Verify button Delete', async () => {
//                 await expect(AdminPage.deleteBtn).toBeClickable()
//             })
//             it('Verify Entitie Admin in Navbar', async () => {
//                 await expect(AdminPage.AdminBtn).toBeClickable()
//                             })
//             it('Verify Instagram button', async () => {
//                 await expect(AdminPage.instagraminBtn).toBeClickable()
//                             })
//             it('Verify Facebook button', async () => {
//                 await expect(AdminPage.fbBtn).toBeClickable()
//                             })
//             it('Verify Twitter button', async () => {
//                 await expect(AdminPage.twitterBtn).toBeClickable()
//                             })
//         })
//         describe('Check if all visual elements are displayed', () => {
//             it('Verify Main header', async () => {
//             await expect(AdminPage.primaryHeader).toBeDisplayed()
//                         })
//             it('Verify Table of contents', async () => {
//             await expect(AdminPage.mainTable).toBeDisplayed()
//                         })
//             it('Verify icon of Button Add', async () => {
//             await expect(AdminPage.addUserBtn).toBeDisplayed()
//                         })
//             it('Verify icon of Button Delete', async () => {
//             await expect(AdminPage.deleteBtn).toBeDisplayed()
//                         })
//             it('Verify icon of Button Edit', async () => {
//             await expect(AdminPage.editBtn).toBeDisplayed()
//                         })
//     })

//         describe('Add a user', () => {
//             it('Enter to form page', async () => {
//             await AdminPage.openAddForm()
//                     })
//             it('Close form page using cross', async () => {
//             await AdminPage.closeForm()
//                     })
//             it('Enter to form page again', async () => {
//             await AdminPage.openAddForm()
//                     })
//             it('Complete inputs with correctly information', async () => {
//             await AdminPage.completeInputs('Testing', 'TestingNico','nicotester@qa.com', 'asdasd123123')
//                     })
//             it('Close Modal confirmation', async () => {
//             await AdminPage.confirmModal()
//                                 })
//             })
//             describe('Delete user', () => {
//                 it('Delete user', async () => {
//                     await AdminPage.deleteUser()
//                             })
//                 it('Confirmation to delete', async () => {
//                     await AdminPage.modalConfirmationDelete()
//                             }) 
                     
//                 })

//             describe('Check error msgs with wrong data', () => {
//              it('Enter to form page', async () => {
//                  await AdminPage.openAddForm()
//              })
//              it('Complete inputs with incorrectly information', async () => {
//                 await AdminPage.completeInputs('', '','', '')
//                         })
            
//              it('Should msg error with First name Invalid', async () => {
//                  await AdminPage.setFirstName('');
//                  await expect(AdminPage.msgErrorfirstName).toHaveText('"name" is not allowed to be empty')
//                  await AdminPage.setFirstName('Ni');
//                  await expect(AdminPage.msgErrorfirstName).toHaveText('"name" length must be at least 3 characters long')
//              })
//              it('Should msg error with Last name Invalid', async () => {
//                  await AdminPage.setLastName('');
//                  await expect(AdminPage.msgErrorLastName).toHaveText('"lastName" is not allowed to be empty')
//                  await AdminPage.setLastName('La');
//                  await expect(AdminPage.msgErrorLastName).toHaveText('"lastName" length must be at least 3 characters long')
//              })
//              it('Should msg error with Email Invalid', async () => {
//                  await AdminPage.setEmail('');
//                  await expect(AdminPage.msgErrorEmail).toHaveText('"email" is not allowed to be empty')
//                  await AdminPage.setEmail('###');
//                  await expect(AdminPage.msgErrorEmail).toHaveText('There are invalid characters')
//              })
//              it('Should msg error with Password Invalid', async () => {
//                  await AdminPage.setPassword('');
//                  await expect(AdminPage.passwrodErrorCharacters).toHaveText('"password" is not allowed to be empty')
//                  await AdminPage.setPassword('asdas');
//                  await expect(AdminPage.passwrodErrorCharacters).toHaveText('"password" length must be at least 8 characters long')
//                  await AdminPage.setPassword('asdasfasfas');
//                  await expect(AdminPage.passwrodErrorCharacters).toHaveText('The password must have letters and numbers')
//              })
//              it('Close form page using cross', async () => {
//                 await AdminPage.closeForm()
//                         })
//          })

//          describe('Edit user', () => {
//                 it('Enter to section edit', async () => {
//                     await AdminPage.openEdit()
//                         })
//                 it('Close section edit using cross ', async () => {
//                     await AdminPage.closeForm()
//                         })
//                 it('Enter to section edit', async () => {
//                     await AdminPage.openEdit()
//                         })
//                 it('Complete inputs with valid information', async () => {
//                     await AdminPage.completeInputs('Charly', 'Garcia','charly@gmail.com', 'charlysoda123')
//                         })
//                 it('Close modal confirmation', async () => {
//                     await AdminPage.confirmModal()
//                         })
//             })
        
// })