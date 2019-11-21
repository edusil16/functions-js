function number_format(number, decimals, dec_point, thousands_sep) {

    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "," : dec_point;
    var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/\,/g, ".") + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}


function adicionarDias(dias) {
    var data = new Date(new Date().setDate(new Date().getDate() + dias));

    var dia = data.getDate().toString();
    var mes = (data.getMonth() + 1).toString();
    var ano = data.getFullYear();

    return ano + "-" + (mes.length == 1 ? "0" + mes : mes) + "-" + (dia.length == 1 ? "0" + dia : dia);
}