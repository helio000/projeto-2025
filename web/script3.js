document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Pega os valores do formulário
        const nome = document.getElementById("nome").value.trim();
        const datanascInput = document.getElementById("datanasc").value;
        const email = document.getElementById("e-mail").value.trim().toLowerCase();
        const telefone = document.getElementById("telefone").value.replace(/\D/g, ""); // remove caracteres não numéricos
        const arteMarcial = document.getElementById("arte-marcial").value;

        // Validação dos campos obrigatórios
        if (!nome || !datanascInput || !email || !telefone || !arteMarcial) {
            alert("Preencha todos os campos!");
            return;
        }

        // Valida se a data é válida
        const dataNascimento = new Date(datanascInput);
        if (isNaN(dataNascimento.getTime())) {
            alert("Data de nascimento inválida!");
            return;
        }

        // Formata a data para YYYY-MM-DD
        const datanascFormatada = datanascInput; // já vem nesse formato do input type=date

        const dados = {
            nome,
            datanasc: datanascFormatada,
            email,
            telefone,
            arteMarcial
        };

        try {
            const resposta = await fetch("http://localhost:3100/alunos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });

            let resultado;
            try {
                resultado = await resposta.json();
            } catch {
                resultado = { error: "Erro desconhecido" };
            }

            if (!resposta.ok) {
                console.error("Erro do backend:", resultado);
                alert("Erro ao cadastrar aluno: " + (resultado.error || "Erro desconhecido"));
                return;
            }

            // Salva o objeto retornado pelo backend
            let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
            alunos.push(resultado);
            localStorage.setItem("alunos", JSON.stringify(alunos));

            alert("Aluno cadastrado com sucesso! Você será redirecionado para a sala em 5 segundos.");
            form.reset();

            setTimeout(() => {
                window.location.href = "sala.html";
            }, 5000);

        } catch (erro) {
            console.error("Erro ao enviar dados para o servidor:", erro);
            alert("Erro na conexão com o servidor.");
        }
    });
});
