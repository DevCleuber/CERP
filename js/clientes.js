let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// 🔍 BUSCAR CNPJ
async function buscarCNPJ() {
  let cnpj = document.getElementById("documento").value;

  if (!cnpj) {
    alert("Digite o CNPJ");
    return;
  }

  cnpj = cnpj.replace(/\D/g, "");

  try {
    const url = `https://api.allorigins.win/raw?url=https://www.receitaws.com.br/v1/cnpj/${cnpj}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === "ERROR") {
      alert("CNPJ não encontrado");
      return;
    }

    document.getElementById("nome").value = data.nome || "";
    document.getElementById("fantasia").value = data.fantasia || "";
    document.getElementById("rua").value = data.logradouro || "";
    document.getElementById("bairro").value = data.bairro || "";
    document.getElementById("cidade").value = data.municipio || "";
    document.getElementById("estado").value = data.uf || "";
    document.getElementById("cep").value = data.cep || "";

  } catch (e) {
    alert("Erro ao buscar CNPJ");
  }
}

  // remove caracteres
  cnpj = cnpj.replace(/\D/g, "");

  try {
    const res = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    const data = await res.json();

    if (data.status === "ERROR") {
      alert("CNPJ não encontrado");
      return;
    }

    document.getElementById("nome").value = data.nome || "";
    document.getElementById("fantasia").value = data.fantasia || "";
    document.getElementById("rua").value = data.logradouro || "";
    document.getElementById("bairro").value = data.bairro || "";
    document.getElementById("cidade").value = data.municipio || "";
    document.getElementById("estado").value = data.uf || "";
    document.getElementById("cep").value = data.cep || "";

  } catch (e) {
    alert("Erro ao buscar CNPJ (API pode estar bloqueando)");
  }
}

// 💾 SALVAR CLIENTE
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

// 🔙 VOLTAR
function voltar(){
  window.location.href = "clientes.html";
}
