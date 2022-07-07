module.exports = class Page {
  open(path) {
    return browser.url(`https://diego-trackgenix-7fgw1ec6c-basp-m2022.vercel.app/${path}`);
  }
};
