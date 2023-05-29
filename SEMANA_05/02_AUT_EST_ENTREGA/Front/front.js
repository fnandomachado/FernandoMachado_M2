var conta = 6786786465

console.log("Astrobaldo lindo");

$(document).ready(function()
{
    $("#texto1").html("Você está devendo: "+conta+" reais");
    $.get("https://127.0.0.1:3000/Candidate", function(resultado)
    {
        console.log(resultado)
        $("texto2").html(resultado[0].candidate_name);
    });
});