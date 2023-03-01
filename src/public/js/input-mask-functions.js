console.log("Está rodando...");

const cpf = document.getElementById("cpf"); // Seletor do campo de cpf
const tel = document.getElementById('tel'); // Seletor do campo de telefone


// cpf.addEventListener('keypress');

// Dispara quando digitado no campo
tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value));

// Dispara quando autocompletado o campo
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value));

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
    tel.value = valor // Insere o(s) valor(es) no campo
}

