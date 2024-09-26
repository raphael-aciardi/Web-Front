document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Impede o comportamento padrão de envio do formulário

      const nome = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const senha = document.getElementById('userPassword').value;
      const confSenha = document.getElementById('userConfPassword').value;

      // Verifica se a senha e a confirmação de senha são iguais
      if (senha !== confSenha) {
          alert("As senhas não coincidem.");
          return;
      }

      // Objeto com os dados a serem enviados
      const usuario = {
          nome: nome,
          email: email,
          senha: senha
      };

      try {
          // Fazendo o fetch para cadastrar o usuário
          const response = await fetch('https://localhost:7032/Usuario', {  // URL da API
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(usuario)  // Converte o objeto em JSON
          });

          if (response.ok) {
              alert('Cadastro realizado com sucesso!');
              // Redirecionar para outra página ou limpar o formulário
              form.reset();
          } else {
              const errorMessage = await response.text();
              alert(`Erro ao cadastrar: ${errorMessage}`);
          }
      } catch (error) {
          console.error('Erro na requisição:', error);
          alert('Erro ao conectar com o servidor.');
      }
  });
});
