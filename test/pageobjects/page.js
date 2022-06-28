module.exports = class Page {
  open(path) {
    return browser.url(`https://diego-trackgenix-app.vercel.app/${path}`);
  }
};
