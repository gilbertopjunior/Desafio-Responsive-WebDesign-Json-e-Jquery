$(document).ready(function() {

    $.getJSON('json/dados-edeb-santa-catarina.json', function(data) {

        $.each(data.municipio, function(index, val) {

            var fxa = (val.fluxo * val.aprendizado).toFixed(2);

            $("#table-ideb ").append(

                "<tr>" +
                "<td>" + "<div class='nome-escola'>" + val.nome + "</div>" + "<span>" + val.escolas + "</span>" + "</td>" +
                "<td>" + "<div class='fxa'>" + val.fluxo + " * " + val.aprendizado + " = " + fxa + "</div>" + "</td>" +
                "<td>" + val.alerta + "</td>" +
                "<td>" + val.atencao + "</td>" +
                "<td>" + val.melhorar + "</td>" +
                "<td>" + val.manter + "</td>" +
                "</tr>"

            )

        });


    });


});
