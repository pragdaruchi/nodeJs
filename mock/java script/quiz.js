const startBtn = document.getElementById('start');
if (startBtn) {
    startBtn.addEventListener('click', () => location.href = 'quiz.html');
}

const form = document.getElementById('quiz-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const correct = { q1: 'javascript', q2: '239', q3: 'javascript xml', q4: 'all' };
        const fb = [];
        new FormData(form).forEach((e, i) => {
            fb.push(e ==  correct[i] ? `${i}: correct` : `${i}: wrong (ans ${correct[i]})`);
        });
        const feedbackDiv = document.getElementById('feedback');
        if (feedbackDiv) {
            feedbackDiv.innerHTML = fb.map(s => `<p>${s}</p>`).join('');
        }
    });
}