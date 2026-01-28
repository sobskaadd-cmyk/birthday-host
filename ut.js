function generateSurprise() {
    const name = document.getElementById('userName').value;
    const date = document.getElementById('birthDate').value;

    if (!name || !date) {
        alert("Isi nama dan tanggal lahirnya dulu ya cantik/ganteng!");
        return;
    }

    // Set Nama
    document.getElementById('display-name').innerText = name;

    // Sembunyikan Input, Tampilkan Konten
    document.getElementById('input-overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('input-overlay').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        startConfetti();
    }, 800);
}

// Efek Confetti Sederhana
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 2
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
            p.y += p.speed;
            if (p.y > canvas.height) p.y = -10;
        });
        requestAnimationFrame(draw);
    }
    draw();
}