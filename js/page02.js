$(document).ready(function() {

    $.getJSON('json/dados-edeb-santa-catarina.json', function(data) {

        $.each(data.municipio, function(index, val) {

            var fxa = (val.fluxo * val.aprendizado);

            $("#table-ideb").append(

                "<tr>" +
                "<td>" + val.nome + val.escolas + "</td>" +
                "<td>" + fxa + "</td>" +
                "<td>" + val.alerta + "</td>" +
                "<td>" + val.atencao + "</td>" +
                "<td>" + val.melhorar + "</td>" +
                "<td>" + val.manter + "</td>" +
                "</tr>"

            )

        });


    });


});
