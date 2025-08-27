document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const dados = {
            nome: document.getElementById("nome").value.trim(),
            datanasc: document.getElementById("datanasc").value, // precisa estar em YYYY-MM-DD
            email: document.getElementById("e-mail").value.trim().toLowerCase(),
            telefone: document.getElementById("telefone").value.trim(),
            arteMarcial: document.getElementById("arte-marcial").value
        };

        if (!dados.nome || !dados.datanasc || !dados.email || !dados.telefone || !dados.arteMarcial) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const resposta = await fetch("http://localhost:3100/alunos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });

            if (!resposta.ok) {
                const erro = await resposta.json();
                alert("Erro ao cadastrar aluno: " + erro.error);
                return;
            }

            alert("Aluno cadastrado com sucesso! Você será redirecionado para a sala em 5 segundos.");
            setTimeout(() => {
                window.location.href = "sala.html";
            }, 5000);

            form.reset();
        } catch (erro) {
            console.error("Erro ao enviar dados para o servidor:", erro);
            alert("Erro na conexão com o servidor.");
        }
    });
});
