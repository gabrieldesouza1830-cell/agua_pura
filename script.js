/*
  ONG Água Pura — JavaScript introdutório.
  Este arquivo contém somente as duas funcionalidades exigidas na atividade:
  1) mostrar/ocultar as formas de ajudar;
  2) validar o formulário de contato com uma confirmação simulada.
*/

// FUNCIONALIDADE 1: interação para mostrar ou ocultar as formas de ajudar.
const botaoAjuda = document.getElementById("toggle-ajuda");
const painelAjuda = document.getElementById("painel-ajuda");

function alternarAjuda() {
  const estaOculto = painelAjuda.hidden;

  // A propriedade hidden controla a visibilidade do painel.
  painelAjuda.hidden = !estaOculto;
  botaoAjuda.setAttribute("aria-expanded", String(estaOculto));

  // O texto do botão informa a próxima ação disponível.
  if (estaOculto) {
    botaoAjuda.textContent = "Ocultar formas de ajudar −";
  } else {
    botaoAjuda.textContent = "Conheça formas de ajudar ＋";
  }
}

if (botaoAjuda && painelAjuda) {
  botaoAjuda.addEventListener("click", alternarAjuda);
}

// FUNCIONALIDADE 2: validação do formulário de contato.
const formulario = document.getElementById("form-contato");

function validarFormulario(evento) {
  // Impede o envio tradicional e o recarregamento da página.
  evento.preventDefault();

  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoAssunto = document.getElementById("assunto");
  const campoMensagem = document.getElementById("mensagem");
  const retorno = document.getElementById("retorno-formulario");

  // Lê os quatro valores e remove espaços do início e do fim.
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value.trim();
  const mensagem = campoMensagem.value.trim();
  let listaErros = "";

  // Limpa os marcadores de erro antes de validar novamente.
  campoNome.setAttribute("aria-invalid", "false");
  campoEmail.setAttribute("aria-invalid", "false");
  campoAssunto.setAttribute("aria-invalid", "false");
  campoMensagem.setAttribute("aria-invalid", "false");

  // O nome precisa ter pelo menos três caracteres.
  if (nome.length < 3) {
    listaErros += "\n• Informe seu nome com pelo menos 3 caracteres.";
    campoNome.setAttribute("aria-invalid", "true");
  }

  // O e-mail deve estar preenchido e passar pela validação básica do navegador.
  campoEmail.value = email;
  if (email === "" || !campoEmail.checkValidity()) {
    listaErros += "\n• Informe um e-mail válido.";
    campoEmail.setAttribute("aria-invalid", "true");
  }

  // O assunto não pode ficar vazio.
  if (assunto === "") {
    listaErros += "\n• Selecione um assunto.";
    campoAssunto.setAttribute("aria-invalid", "true");
  }

  // A mensagem precisa ter pelo menos dez caracteres após trim().
  if (mensagem.length < 10) {
    listaErros += "\n• Escreva uma mensagem com pelo menos 10 caracteres.";
    campoMensagem.setAttribute("aria-invalid", "true");
  }

  // Exibe o retorno no HTML para que a pessoa saiba o que corrigir.
  retorno.hidden = false;
  retorno.classList.remove("sucesso", "erro");

  if (listaErros !== "") {
    retorno.classList.add("erro");
    retorno.textContent = "Confira os campos e tente novamente:" + listaErros;
    retorno.focus();
  } else {
    // Nenhuma mensagem é enviada e nenhum dado é armazenado.
    retorno.classList.add("sucesso");
    retorno.textContent = "Tudo certo! Sua mensagem passou pela validação. Este é apenas um envio simulado: nenhum e-mail foi enviado e nenhum dado foi coletado ou armazenado.";
    retorno.focus();
  }
}

if (formulario) {
  formulario.addEventListener("submit", validarFormulario);
}
