function openLetter() {
    const env = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    if (!env.classList.contains('open')) {
        env.classList.add('open');
        confetti({ 
            particleCount: 150, 
            spread: 70, 
            origin: { y: 0.5 } 
        });
    } else {
        env.classList.remove('open');
    }
}