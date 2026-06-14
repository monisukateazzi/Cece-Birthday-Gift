function openLetter() {
    const env = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    if (!env.classList.contains('open')) {
        env.classList.add('open');
        letter.style.display = 'block';
        confetti({ 
            particleCount: 150, 
            spread: 70, 
            origin: { y: 0.5 } 
        });
    } else {
        env.classList.remove('open');
        setTimeout(() => {
            letter.style.display = 'none';
        }, 800);
    }
}