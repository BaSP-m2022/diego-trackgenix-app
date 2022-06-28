const Page = require('./page');

class HomePage extends Page {
  get header() {
    return $('.header_brand__S2QSM');
  }
  get title() {
    return $('.header_appName__ZCFAq');
  }
  get facebook() {
    return $('.header_container__SEPrT > div:nth-child(2) > a:nth-child(1)');
  }
  get facebookImg() {
    return $('.header_container__SEPrT > div:nth-child(2) > a:nth-child(1) > img:nth-child(1)');
  }
  get twitter() {
    return $('.header_container__SEPrT > div:nth-child(2) > a:nth-child(2)');
  }
  get twitterImg() {
    return $('.header_container__SEPrT > div:nth-child(2) > a:nth-child(2) > img:nth-child(1)');
  }
  get instagram() {
    return $('.header_container__SEPrT > div:nth-child(2) > a:nth-child(3)');
  }
  get instagramImg() {
    return $('.header_container__SEPrT > div:nth-child(2) > a:nth-child(3) > img:nth-child(1)');
  }
  get homeTitle() {
    return $('.home_container__+O+R5 > h2:nth-child(1)');
  }
  get adminsBtn() {
    return $('.header_rutes__-JsnG > li:nth-child(1) > a:nth-child(1)');
  }
  get superAdminsBtn() {
    return $('.header_rutes__-JsnG > li:nth-child(2) > a:nth-child(1)');
  }
  get employeeBtn() {
    return $('.header_rutes__-JsnG > li:nth-child(3) > a:nth-child(1)');
  }
  get projectsBtn() {
    return $('.header_rutes__-JsnG > li:nth-child(4) > a:nth-child(1)');
  }
  get timesheetBtn() {
    return $('.header_rutes__-JsnG > li:nth-child(5) > a:nth-child(1)');
  }
  get taskBtn() {
    return $('.header_rutes__-JsnG > li:nth-child(6) > a:nth-child(1)');
  }
  get footer1() {
    return $('.footer_main__nwLSQ');
  }
  get footer2() {
    return $('.footer_license__uvxSL');
  }
  //Methods
  open() {
    return super.open('');
  }
}
module.exports = new HomePage();
