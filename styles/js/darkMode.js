// script.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // 1. Verificar a preferência de tema salva (se houver)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // 2. Adicionar um "listener" de clique ao botão
    darkModeToggle.addEventListener('click', () => {
        // 3. Alternar a classe 'dark-mode' no <body>
        body.classList.toggle('dark-mode');

        // 4. Salvar a preferência do usuário no armazenamento local (localStorage)
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});