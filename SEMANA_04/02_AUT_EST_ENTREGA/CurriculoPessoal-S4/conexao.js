$(document).ready(function () {
    $.get("http://127.0.0.1:3000/Candidate", function (resultado) {
        console.log(resultado);
        for(let i=0; i<4; i++)
        {
            
            $("#nome").append(resultado[i].candidate_name);
            $("#telefone").append(resultado[i].candidate_phone);
            $("#email").append(resultado[i].candidate_email);
            $("#descricao").append(resultado[i].candidate_description);
            
        }
    });
});

function CriaUsuario()
{
    var id = parseInt($("#recebeId").val());
    var nome = $("#recebeNome").val();
    var telefone = $("#recebeTelefone").val();
    var email = $("#recebeEmail").val();
    var descricao = $("#recebeDescricao").val();


    var json = `{
                "id_candidate":${id},
                "candidate_name":${nome},
                "candidate_phone":${telefone},
                "candidate_email":${email},
                "candidate_description":${descricao}
                }`
    $.post("http://127.0.0.1:3000/createCandidate", json, function(resultado)
    {
        console.log(resultado);
    });
};