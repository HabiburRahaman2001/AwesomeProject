const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect($('#flash')).toMatchElementSnapshot('flashAlert')
    })
})

// describe('React Native App Test', () => {
//     it('should launch the app', async () => {
//       const el = await $('~AccessibilityID');  // Example of finding an element
//       await el.click();
//     });
//   });
  