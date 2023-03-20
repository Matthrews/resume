window.onload = function () {
    var queryStr = location.search;
    var con = document.getElementById('collection');
    if (queryStr.indexOf('show=collection') > -1) {
        con.style.display = "block"
    }
}