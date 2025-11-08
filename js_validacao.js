document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-sac");
    const emailInput = document.getElementById("email");
    const cpfInput = document.getElementById("cpf");

    // Impede digitar qualquer coisa que não seja número
    cpfInput.addEventListener("input", (e) => {
        let valor = cpfInput.value.replace(/\D/g, ""); // remove tudo que não é número

        // Aplica máscara conforme o usuário digita
        if (valor.length > 3 && valor.length <= 6)
            valor = valor.replace(/(\d{3})(\d+)/, "$1.$2");
        else if (valor.length > 6 && valor.length <= 9)
            valor = valor.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
        else if (valor.length > 9)
            valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");

        cpfInput.value = valor.slice(0, 14); // impede digitar além de 11 números (com máscara)
    });

    form.addEventListener("submit", (e) => {
        const emailValido = validarEmail(emailInput.value);
        const cpfValido = validarCPF(cpfInput.value);

        if (!emailValido) {
            alert("Por favor, insira um e-mail válido no formato joao.silva@net.com");
            e.preventDefault();
            return;
        }

        if (!cpfValido) {
            alert("Por favor, insira um CPF válido no formato 999.999.999-99");
            e.preventDefault();
            return;
        }

        alert("Mensagem enviada com sucesso!");
    });

    // Validação de formato do e-mail
    function validarEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
        return regexEmail.test(email);
    }

    // Validação de formato do CPF (somente formato, não cálculo real)
    function validarCPF(cpf) {
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regexCPF.test(cpf);
    }
});
