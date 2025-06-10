// Validação de CPF e E-mail
function validarCampos() {
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;

  const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf);
  const emailValido = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);

  if (!cpfValido) {
    alert("CPF inválido. Use o formato 000.000.000-00");
  }

  if (!emailValido) {
    alert("E-mail inválido. Ex: usuario@email.com");
  }

  if (cpfValido && emailValido) {
    alert("Dados validados com sucesso!");
  }
}

// Adicionar nova UC
function adicionarUC() {
  const novaUC = prompt("Digite o nome da nova UC:");
  if (novaUC) {
    const li = document.createElement("li");
    li.innerHTML = `${novaUC} <button onclick="mover(this, 'up')">⬆️</button> <button onclick="mover(this, 'down')">⬇️</button>`;
    document.getElementById("lista-ucs").appendChild(li);
  }
}

// Mover UC para cima ou para baixo
function mover(botao, direcao) {
  const li = botao.parentElement;
  const ul = li.parentElement;
  if (direcao === "up" && li.previousElementSibling) {
    ul.insertBefore(li, li.previousElementSibling);
  } else if (direcao === "down" && li.nextElementSibling) {
    ul.insertBefore(li.nextElementSibling, li);
  }
}

// Adicionar descrição pessoal extra
function adicionarDescricao() {
  const texto = document.getElementById("descricaoExtra").value;
  if (texto.trim()) {
    const p = document.createElement("p");
    p.textContent = texto;
    document.getElementById("descricaoAdicional").appendChild(p);
    document.getElementById("descricaoExtra").value = "";
  }
}
