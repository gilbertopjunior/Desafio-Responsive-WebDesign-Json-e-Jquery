//define chart colours
var dynaColorsSet = [
    "#ffd614", // yellow
    "#fd8317", // orange
    "#b8df26", // green
    "#34a1de" // blue
];

//global variable
var referencia;

$(document).ready(function() {
    $.getJSON('js/data/dados-edeb-santa-catarina.json', function(data) {
        referencia = data.municipio;
        //referencia is of Type json
        createTable(referencia);
    });

    $("#searchIdeb").keyup(function() {
        searchItem($("#searchIdeb").val());
    });

});


var createTable = function(ref) {
    $('#table-ideb tbody').empty();
    $.each(ref, function(index, val) {
        var fxa = (val.fluxo * val.aprendizado).toFixed(2);
        $("#table-ideb tbody").append(
            "<tr class='new-line'>" +
            "<td>" + "<div class='nome-escola'>" + val.nome + "</div>" + "<span>" + val.escolas + "</span>" + "</td>" +
            "<td>" + "<div class='fxa'>" + val.fluxo + " * " + val.aprendizado + " = " + fxa + "</div>" + "</td>" +
            "<td class='ln-char'>" + "<div class='chart yellow' data-percent='" + val.alerta + "'>" + "<span class='percent'>" + "</span>" + "</div>" + "</td>" +
            "<td class='ln-char'>" + "<div class='chart orange' data-percent='" + val.atencao + "'>" + "<span class='percent'>" + "</span>" + "</div>" + "</td>" +
            "<td class='ln-char'>" + "<div class='chart green' data-percent='" + val.melhorar + "'>" + "<span class='percent'>" + "</span>" + "</div>" + "</td>" +
            "<td class='ln-char'>" + "<div class='chart blue' data-percent='" + val.manter + "'>" + "<span class='percent'>" + "</span>" + "</div>" + "</td>" +
            "</tr>"
        )
        $('.chart').easyPieChart({
            barColor: function() {
                if ($(this.el).hasClass('yellow')) {
                    return dynaColorsSet[0];
                } else if ($(this.el).hasClass('orange')) {
                    return dynaColorsSet[1];
                } else if ($(this.el).hasClass('green')) {
                    return dynaColorsSet[2];
                } else {
                    return dynaColorsSet[3];
                }
            },
            trackColor: '#EFEFEF  ',
            scaleColor: false,
            lineWidth: 10,
            size: 80,
            lineCap: 'square',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


    });
}


var searchItem = function(item) {

    var results = [];

    $.each(referencia, function(index, val) {

        var capture = new RegExp(item, 'i');

        if (val.nome.search(capture) != -1) {
            results.push(val);
        }
    });

    if (results.length > 0) {
        createTable(results);
    } else {
        $("#table-ideb tbody").empty();
    }

}
