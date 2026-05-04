let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function salvar(){
  const cliente = {
    id: Date.now(),
    nome: document.getElementById("nome").value,
    fantasia: document.getElementById("fantasia").value,
    tipoPessoa: document.getElementById("tipoPessoa").value,
    documento: document.getElementById("documento").value,
    inscricao: document.getElementById("inscricao").value,

    endereco: {
      rua: document.getElementById("rua").value,
      numero: document.getElementById("numero").value,
      bairro: document.getElementById("bairro").value,
      cidade: document.getElementById("cidade").value,
      estado: document.getElementById("estado").value,
      cep: document.getElementById("cep").value
    },

    contato: {
      telefone: document.getElementById("telefone").value,
      celular: document.getElementById("celular").value,
      email: document.getElementById("email").value
    },

    ativo: true,
    movimentacao: false
  };

  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  alert("Cliente salvo!");
  window.location.href = "clientes.html";
}

function voltar(){
  window.location.href = "clientes.html";
}
