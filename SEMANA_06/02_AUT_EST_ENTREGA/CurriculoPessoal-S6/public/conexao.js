const id_candidato = parseInt($("#candidato-id").val());

// Criar aqui uma nova variável para receber o valor do id inserido dentro da página para realizar a pesquisa dentro 
// do banco de dados, para isso, tenho que ajeitar a forma como recebo o id preterido, fazedo-o na mesma página html. 
// Acho que vou criar um modal, resolvendo assim esse problema.

$(document).ready(function () { //mostra o usuário inserido na página pagcurriculo.html
    $.get("http://127.0.0.1:3000/Candidate", function (resultado) {
        console.log(resultado);
        for (let i = 0; i < resultado.length; i++) {

            $("#nome").text(resultado[i].candidate_name);
            $("#telefone").text(resultado[i].candidate_phone);
            $("#email").text(resultado[i].candidate_email);
            $("#descricao").text(resultado[i].candidate_description);

        }
    });
});

function CriaUsuario() { //cria um usuário novo
    var id = parseInt($("#recebeId").val());
    var nome = $("#recebeNome").val();
    var telefone = parseInt($("#recebeTelefone").val());
    var email = $("#recebeEmail").val();
    var descricao = $("#recebeDescricao").val();


    var json = {
        "id_candidate": id,
        "candidate_name": nome,
        "candidate_phone": telefone,
        "candidate_email": email,
        "candidate_description": descricao
    }
    console.log(json)
    $.post("http://127.0.0.1:3000/createCandidate", json);
};

function TesteAjax(){ //recebe o valor do usuário buscado (recebe, mas não passa para a outra página não sei pq)
    var a = $("#candidato-id").val();
    $.post("SelecaoId.php", {selecao: a})
        .done(function(mostra){
            $("#IdSelecionado").html(mostra);
        });
};

// function UsuarioSelecionado (){  //outro meio de receber o id(atualmente não utilizado)
//     $.post("http://127.0.0.1:3000/UserSelected", function (resultado) {
//         console.log(resultado);
// });
// };


