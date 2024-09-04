// Adiciona rolagem suave entre as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para adicionar animação de fade-in nas seções quando entram na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

// Seleciona todas as seções para aplicar o fade-in
document.querySelectorAll('.sobre, .projetos, .contato').forEach(section => {
    observer.observe(section);
});
