exports.LoginPage =  class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByLabel('Username or email address');
    this.password = page.getByLabel('Password');
    this.signInBtn = page.locator("input[name='commit']");
  }

  async login(username, password) {
    await this.username.fill(username);    await this.password.fill(password);
    await this.signInBtn.click();
  }
}
