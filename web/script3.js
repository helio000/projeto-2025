document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const dados = {
            nome: document.getElementById("nome").value,
            datanasc: document.getElementById("datanasc").value,
            email: document.getElementById("e-mail").value,
            telefone: document.getElementById("telefone").value,
            arteMarcial: document.getElementById("arte-marcial").value
        };

        let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
        alunos.push(dados);
        localStorage.setItem("alunos", JSON.stringify(alunos));

        
        alert("Você será redirecionado para a sala em 10 segundos.");

        setTimeout(() => {
            window.location.href = "sala.html";
        }, 10000);

        try {
            await fetch("http://localhost:3100/alunos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });
        } catch (erro) {
            console.error("Erro ao enviar dados para o servidor:", erro);
        }

        form.reset();
    });
});
