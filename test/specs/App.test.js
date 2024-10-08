var expect = require('chai').expect;

describe('Simple App testing', () => {

  beforeEach(async () => {
    await $("~app-root").waitForDisplayed({ timeout: 10000, reverse: false });
  });

  it('Login test: valid case', async () => {
    await $('~username').setValue("code");
    await $('~password').setValue("code");

    await $("~login").click();

    await $("~loginstatus").waitForDisplayed({ timeout: 11000 });
    const status = await $("~loginstatus").getText();
    expect(status).to.equal('Login Successful!');
  });

  it('Login test: invalid case', async () => {
    await $('~username').setValue("nevercode");
    await $('~password').setValue("codemagic");

    await $("~login").click();

    await $("~loginstatus").waitForDisplayed({ timeout: 11000 });
    const status = await $("~loginstatus").getText();
    expect(status).to.equal('Login Failed');
  });
});
