const Page = require('./page');

class HomePage extends Page {
  get header() {
    return $('.header_appName__ZCFAq');
  }
  get title() {
    return $('.header_tittle__9z1h2');
  }
  get facebook() {
    return $('div.footer_container__padpO > div:nth-child(3) > a:nth-child(1)');
  }
  get facebookImg() {
    return $('div.footer_container__padpO > div:nth-child(3) > a:nth-child(1) > img:nth-child(1)');
  }
  get twitter() {
    return $('div.footer_container__padpO > div:nth-child(3) > a:nth-child(2)');
  }
  get twitterImg() {
    return $('div.footer_container__padpO > div:nth-child(3) > a:nth-child(2) > img:nth-child(1)');
  }
  get instagram() {
    return $('div.footer_container__padpO > div:nth-child(3) > a:nth-child(3)');
  }
  get instagramImg() {
    return $('div.footer_container__padpO > div:nth-child(3) > a:nth-child(3) > img:nth-child(1)');
  }
  get homeTitle() {
    return $('/html/body/div/div/header/div/div[2]');
  }
  get adminsBtn() {
    return $('.sidebar_menuItems__-gTZo > li:nth-child(2) > a:nth-child(1)');
  }
  get superAdminsBtn() {
    return $('.sidebar_menuItems__-gTZo > li:nth-child(3) > a:nth-child(1)');
  }
  get employeeBtn() {
    return $('.sidebar_menuItems__-gTZo > li:nth-child(4) > a:nth-child(1)');
  }
  get projectsBtn() {
    return $('.sidebar_menuItems__-gTZo > li:nth-child(5) > a:nth-child(1)');
  }
  get timesheetBtn() {
    return $('.sidebar_menuItems__-gTZo > li:nth-child(6) > a:nth-child(1)');
  }
  get taskBtn() {
    return $('.sidebar_menuItems__-gTZo > li:nth-child(7) > a:nth-child(1)');
  }
  get footer() {
    return $('footer.footer_container__padpO');
  }
  //Methods
  open() {
    return super.open('');
  }
}
module.exports = new HomePage();
