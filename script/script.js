///<reference path="../typings/globals/jquery/index.d.ts" />

$voz =  true;

function Beep() {
    if($voz)
    {
        var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
        snd.play();
    }
    
}

function GeraFuncaoEspacos(){
    $("#Novo").click(function () { window.location.replace("novaFase.html"); });
            $("#Play").click(function () { window.location.replace("index.php"); });



            $("#Central").mouseleave(function () { Menssagem("você saiu da area do jogo."); });
            $("#OnOff").mouseover(function () { Menssagem("Desativar som."); });
            $("#Novo").mouseover(function () { Menssagem("Criar novo jogo."); });

            $(".bloco").mouseover(function () { Beep(); });
            $(".letra").contextmenu(function () { Menssagem($(this).attr("alt") + " " + $(this).val(), "L"); });
            $(".pergunta").contextmenu(function () { Menssagem($(this).attr("alt") + ". " + $(this).val(), "P"); });
            $(".bloqueado").contextmenu(function () { Menssagem($(this).attr("alt"), "B") });
            $(".borda").contextmenu(function () { Menssagem("Você encostou na borda " + $(this).val(), "X"); });

            
}

function NumeroParaLetra($num)
{
    switch ($num) {
        case 0:
            return "0";
        case 1:
            return "A";
        case 2:
            return "B";
        case 3:
            return "C";
        case 4:
            return "D";
        case 5:
            return "E";
        case 6:
            return "F";
        case 7:
            return "G";
        case 8:
            return "H";
        case 9:
            return "I";
        case 10:
            return "J";
        case 11:
            return "K";
        case 12:
            return "L";
        case 13:
            return "M";
        case 14:
            return "N";
        case 15:
            return "O";
        case 16:
            return "P"; 
        case 17:
            return "Q"; 
        case 18:
            return "R"; 
        case 19:
            return "S"; 
        case 20:
            return "T"; 
        case 21:
            return "U"; 
        case 22:
            return "V"; 
        case 23:
            return "W"; 
        case 24:
            return "Y"; 
        case 25:
            return "X"; 
        case 26:
            return "Z";    
        default:
            break;
    }
}

function Menssagem($msg, $tipo)
{
    if($voz)
    {
        var msg = new SpeechSynthesisUtterance($msg);
        if($tipo == "P" || $tipo == "L" || $tipo == "X" || $tipo == "B")
        {
            msg.rate = 0.8;
        }else{
            msg.rate = 1.5;
        }
        
        msg.pitch = 1;
        msg.volume = 1;
        msg.lang = "pt-BR"
        window.speechSynthesis.speak(msg);
    }else{
        if($tipo == "P")
        {
            alert($msg);
        }
    }
}

function CriaTela(tamanho){

    $i = 0;
    //$tamanhoMatiz = prompt("Tamanho da matriz");
    $tamanhoMatiz = tamanho;
    
    $tamanhoMatiz++;
    for ($j=0; $j < $tamanhoMatiz; $j++) {
        for ($k=0; $k < $tamanhoMatiz; $k++) {
                if($i == $j)
                {
                    $("#Central").append("<input class='borda bloco' id='" + NumeroParaLetra($k) + $j + "' style='margin-left: 0;' value='" + $j + "' alt='" + NumeroParaLetra($k) + $j + ".' readonly></input>");
                    $i++;
                }else{
                    if($j == 0)
                    {
                        $("#Central").append("<input class='borda bloco' id='" + NumeroParaLetra($k) + $j + "' maxlength='1' value='" + NumeroParaLetra($k) + "' alt='" + NumeroParaLetra($k) + $j + ".' readonly></input>");
                    }else{
                        $("#Central").append("<input class='letra bloco' valor='' id='" + NumeroParaLetra($k) + $j + "' maxlength='1' alt='" + NumeroParaLetra($k) + $j + ".'></input>");
                    }
                }
        }        
    }
    
    $("#00").val("●");
    $(".bloco").css("width","calc(100%/" + $tamanhoMatiz + " - (2px*" + ($tamanhoMatiz-1) + ")/" + $tamanhoMatiz + ")");
    $(".bloco").css("height","calc(100%/" + $tamanhoMatiz + " - (2px*" + ($tamanhoMatiz-1) + ")/" + $tamanhoMatiz + ")");

}

function AjustaTamanho(){

    $("#Central").height($(document).height() - 100);
    $("#Central").width($("#Central").height());

    $largura = $(document).width() - $("#Central").width();
    $altura = $(document).height() - $("#Central").height();

    $("#Central").css("margin-left", $largura/2);
    $("#Central").css("margin-top", $altura/2);

    $largura = $(document).width()*0.02;
    $altura = $(document).height()*0.02;

    if ($largura >= $altura) {
        $tamanho = $largura;
    }else{
        $tamanho = $altura;
    }

    $(".btn").width($tamanho);
    $(".btn").height($tamanho);
    $(".btn").css("border-radius",$tamanho*10);
    $(".btn").css("font-size",$tamanho*0.5);
    $("#contentBtn").width($tamanho + 25);

}

$(document).ready(function() {
    
    AjustaTamanho();
    
    

    $("#OnOff").click(function() { 

        if($voz)
        {
            $("#OnOff").css("background-image","url(img/off.png)");
            $voz = false;
        }else{
            $("#OnOff").css("background-image","url('img/on.png')");
            $voz = true;
            Menssagem("Voz ativada.");
        }    
     });

    

    

    
     
});

$(window).resize(function() {
    AjustaTamanho();     
});