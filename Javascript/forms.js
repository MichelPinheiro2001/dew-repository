document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularioAcademico");
    const inputNome = document.getElementById("nome");
    const inputNota1 = document.getElementById("nota1");
    const inputNota2 = document.getElementById("nota2");
    const btnCalcular = document.getElementById("btnCalcular");
    const divResultado = document.getElementById("resultado");

    // Função para calcular a média
    btnCalcular.addEventListener("click", () => {
        const nome = inputNome.value.trim();
        const nota1 = parseFloat(inputNota1.value);
        const nota2 = parseFloat(inputNota2.value);

        // Validação simples para garantir que os campos foram preenchidos
        if (!nome || isNaN(nota1) || isNaN(nota2)) {
            divResultado.textContent = "Por favor, preencha o nome e as duas notas corretamente.";
            divResultado.style.color = "red";
            return;
        }

        const media = (nota1 + nota2) / 2;
        const situacao = media >= 7 ? "Aprovado" : "Em recuperação/Reprovado";

        divResultado.textContent = `Olá ${nome}, sua média é ${media.toFixed(1)} - Situação: ${situacao}`;
        divResultado.style.color = media >= 7 ? "green" : "orange";
    });

    // Limpar também o texto de resultado ao clicar em Limpar
    form.addEventListener("reset", () => {
        divResultado.textContent = "";
    });
});