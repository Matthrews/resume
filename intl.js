var tran = new Translater();

var isEnglish = function (path) {
  return /lan=en/.test(path);
};

var setLangByURL = function (path) {
  tran.setLang(path && isEnglish(path) ? "en" : "default");
};

window.addEventListener("load", () => {
  setLangByURL(location.search);
});

window.addEventListener("hashchange", () => {
  setLangByURL(location.hash);
});

// 卸载监听
window.onunload = function () {
  window.removeEventListener("load", () => {
    setLangByURL(location.search);
  });
  window.removeEventListener("hashchange", () => {
    setLangByURL(location.hash);
  });
};
