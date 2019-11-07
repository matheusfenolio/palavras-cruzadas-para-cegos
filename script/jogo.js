function CarregaFase(xml, tamanho) {
    CriaTela(tamanho);

    //var xml = prompt("Insira o XML");
    var xmlDoc = $.parseXML(xml);
    var $xml = $(xmlDoc);
    var $person = $xml.find("bloco");


    $person.each(function () {
        if ($(this).find('tipo').text() == "P") {
            $("#" + $(this).find('id').text()).removeClass("letra");
            $("#" + $(this).find('id').text()).removeClass("bloqueado");

            $("#" + $(this).find('id').text()).addClass("pergunta");
            $("#" + $(this).find('id').text()).attr("alt", $(this).find('pergunta').text());
            $("#" + $(this).find('id').text()).attr("valor", $(this).find('valor').text());

        } else if ($(this).find('tipo').text() == "L") {

            $("#" + $(this).find('id').text()).removeClass("pergunta");
            $("#" + $(this).find('id').text()).removeClass("bloqueado");

            $("#" + $(this).find('id').text()).addClass("letra");
            $("#" + $(this).find('id').text()).attr("valor", $(this).find('valor').text());

        } else if ($(this).find('tipo').text() == "X") {
            $("#" + $(this).find('id').text()).removeClass("letra");
            $("#" + $(this).find('id').text()).removeClass("pergunta");

            $("#" + $(this).find('id').text()).addClass("bloqueado");
            $("#" + $(this).find('id').text()).attr("alt", $("#" + $(this).find('id').text()).attr("alt") + ". Bloco vazio.");
            $("#" + $(this).find('id').text()).prop('readonly', true);

        } else {
            //nada
        }


        //alert($(this).find('id').text() + " " + $(this).find('tipo').text() + " " + $(this).find('valor').text());
    });
}

$(document).ready(function () {
    $(".btnPopUp").mouseover(function () {
        Menssagem($(this).text());
    });

    $(".btnPopUp").click(function () {
        $xml = $(this).attr("xml");
        $tamanho = $(this).attr("tamanho");

        $("#ConteinerPopUp").fadeOut("slow", function () {
            $("#ConteinerPopUp").css("display", "none");
            $("#ConteinerPopUp").remove();
            $("#Central").css("display", "block");
            $("#contentBtn").css("display", "block");
            CarregaFase($xml, $tamanho);

            GeraFuncaoEspacos();

            $(".bloco").focusout(function () {

                var correto = $(this).attr("valor");
                var digitado = $(this).val();

                correto = correto.toUpperCase();
                digitado = digitado.toUpperCase()

                if (($(this).hasClass("letra") || $(this).hasClass("pergunta")) && digitado != "") {

                    $(this).removeClass("certo");
                    $(this).removeClass("errado");

                    if (correto == digitado) {

                        $(this).addClass("certo");
                        Menssagem("Letra correta");

                    } else if (correto != digitado && digitado != "") {

                        $(this).addClass("errado");
                        Menssagem("Letra errada");

                    } else {


                    }
                } else if (($(this).hasClass("letra") || $(this).hasClass("pergunta")) && $(this).val() == "") {


                    $(this).removeClass("certo");
                    $(this).removeClass("errado");

                } else {

                }
            });
        });



    });


});