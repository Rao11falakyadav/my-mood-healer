function generateMoodTherapy() {
    const mood = document.getElementById('mood').value;

    showComfortingQuote(mood);
}

function showComfortingQuote(mood) {
    const quotes = {
        sad: "🌤️ This too shall pass. You're stronger than you feel.",
        angry: "🌊 Take a deep breath. Peace begins with a pause.",
        anxious: "🌿 One step at a time. You've handled worse before.",
        lonely: "💛 You're never truly alone. Someone cares deeply about you. Lets dance champ,I am playing the music!!.",
        tired: "🛌 Rest is not a weakness, it's a recharge."
    };

    const quote = quotes[mood] || "You're doing your best, and that's enough.";
    document.getElementById('poemOutput').innerText = quote;
}

function generateMoodTherapy() {
    const mood = document.getElementById('mood').value;

    showComfortingQuote(mood);
    drawSoothingArt(mood);
    playSoothingMusic(mood);
}

function drawSoothingArt(mood) {
    const canvas = document.getElementById('artCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear previous art

    // Soothing color palette per mood
    const soothingColors = {
        sad: ['#B0E0E6', '#AFEEEE', '#ADD8E6'],
        angry: ['#E6E6FA', '#FFF0F5', '#FFE4E1'],
        anxious: ['#98FB98', '#E0FFFF', '#F5DEB3'],
        lonely: ['#FFDAB9', '#F0FFF0', '#FFFACD'],
        tired: ['#F0F8FF', '#FAFAD2', '#E6E6FA']
    };

    const colors = soothingColors[mood] || ['#D3D3D3'];
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 20 + Math.random() * 30;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.5;
        ctx.fill();
    }

    ctx.globalAlpha = 1.0;
}
function playSoothingMusic(mood) {
    const music = {
        sad: 'music/soft-piano.mp3',
        angry: 'music/ocean-waves.mp3',
        anxious: 'music/forest-birds.mp3',
        lonely: 'music/warm-guitar.mp3',
        tired: 'music/rain.mp3'
    };

    const bgMusic = document.getElementById('bgMusic');
    bgMusic.src = music[mood] || '';
    bgMusic.play();
}


