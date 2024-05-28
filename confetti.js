import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const btn = document.getElementById("btn");

function makeConfetti() {
    confetti({
        width: 15, // Ubah nilai lebar confetti di sini
        height: 15, // Ubah nilai tinggi confetti di sini
    });
}

btn.addEventListener("click", makeConfetti);