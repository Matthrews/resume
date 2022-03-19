var tran = new Translater();

window.addEventListener("load", () => {
  tran.setLang(tran.lang_name);
});

window.addEventListener("hashchange", () => {
  tran.setLang(tran.lang_name);
});

tran.setLang("default")
