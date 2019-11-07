var TamanhoGlobal = 0;

function SalvarJogo() {
    var jogo = [];

    $("#Central").find(".bloco").each(function () { jogo.push(this.id); });


    $xml = "<?xml version='1.0' ?><Jogo>";



    jogo.forEach(element => {


        if ($("#" + element).hasClass("borda")) {
            //Não faz nada
        } else {

            $xml += "<bloco><id>" + element + "</id>";

            if ($("#" + element).hasClass("letra")) {
                $xml += "<tipo>L</tipo>";
            } else if ($("#" + element).hasClass("pergunta")) {
                $xml += "<tipo>P</tipo>";
            } else if ($("#" + element).hasClass("bloqueado")) {
                $xml += "<tipo>X</tipo>";
            } else {
                alert("nada");
            }

            $xml += "<pergunta>" + $("#" + element).attr("alt") + "</pergunta>";

            $xml += "<valor>" + $("#" + element).val() + "</valor></bloco>";
        }
    });

    $xml += "</Jogo>";

    Menssagem("Digite um nome para o seu jogo.");
    $nome = prompt("Digite um nome para o jogo");
    if ($nome.trim()) {
        $.post("salvar.php", 'tamanho=' + TamanhoGlobal + '&xml=' + $xml + '&nome=' + $nome, function (data) {
            console.log(data);
        });
    } else {
        Menssagem("Jogo não foi salvo pois você não digitou um nome");
    }


}

$(document).ready(function () {

    Menssagem("Antes de começarmos vamos para uma breve explicação.");
    Menssagem("Para mudar o tipo do campo basta dar dois cliques rapidos no campo, a sequencia é Letra; Bloco vazio; Pergunta");
    Menssagem("Sempre que o bloco mudar para pergunta ela vai pedir para você digitar uma pergunta.");
    Menssagem("Ao final da pergunta coloque um ponto final e escres quantas letras para qual posição.");
    Menssagem("Digite o tamanho da matriz do jogo.");
    $tamanho = prompt("Tamanho da matriz");
    TamanhoGlobal = $tamanho;
    CriaTela($tamanho);
    GeraFuncaoEspacos();


    $(".bloco").dblclick(function () {
        if ($(this).hasClass("letra")) {
            $(this).removeClass("letra");
            $(this).addClass("bloqueado");
            $(this).prop('readonly', true);
            $(this).val("");
            $(this).attr("alt", $(this).attr("id") + ". Bloco vazio.");
        } else if ($(this).hasClass("pergunta")) {
            $(this).removeClass("pergunta");
            $(this).addClass("letra");
            $(this).prop('readonly', false);
            $(this).attr("alt", $(this).attr("id") + ". ");
        } else if ($(this).hasClass("bloqueado")) {
            $(this).removeClass("bloqueado");
            $(this).addClass("pergunta");
            Menssagem("Digite qual é a pergunta");
            $perg = prompt("Digite qual é a pergunta", "P");
            $(this).attr("alt", $(this).attr("id") + ". Pergunta. " + $perg);
        }


        
            
    });

    $(".bloco").mousedown(function (e) {
        switch (e.which) {
            case 2:
                if ($(this).hasClass("pergunta")) {
                    Menssagem("Digite a pergunta.", "P");
                    var pergunta = prompt("Digite a pergunta");
                    $(this).attr("alt", $(this).attr("id") + ". " + pergunta);
                } else {
                    Menssagem("Este não é um bloco de pergunta.", "P");
                }
                break;
        }
        return true;// to allow the browser to know that we handled it.
    });

    $("#Play").mouseover(function () { Menssagem("Voltar a jogar"); });
    $("#Salvar").mouseover(function () { Menssagem("Salvar jogo."); });
    $("#Salvar").click(function () { SalvarJogo(); });

    $(document).keydown(function (event) {
        if (event.which == "17") {

        }
    });

});

