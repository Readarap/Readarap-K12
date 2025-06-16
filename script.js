const players = new Tone.Players({
    beat1: "assets/sounds/beat1.mp3",
    melody1: "assets/sounds/melody1.mp3",
    vocal1: "assets/sounds/vocal1.mp3"
}).toDestination();

const selectedSounds = [];
let mediaRecorder;
let recordedChunks = [];

navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = e => recordedChunks.push(e.data);
    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'audio/mp3' });
        players.add('recordedVocal', URL.createObjectURL(blob));
        document.getElementById('output').textContent = 'Rap recorded! Added to your track.';
    };
}).catch(err => {
    console.error('Microphone access denied:', err);
    document.getElementById('output').textContent = 'Please allow microphone access to record your rap!';
});

document.querySelectorAll('.sound-btn').forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.dataset.sound;
        if (!selectedSounds.includes(sound)) {
            selectedSounds.push(sound);
            document.getElementById('output').textContent = `Added ${sound} to your rap!`;
        }
    });
});

document.getElementById('play-track').addEventListener('click', async () => {
    await Tone.start();
    selectedSounds.forEach(sound => players.player(sound).start());
    document.getElementById('output').textContent = `Playing rap with: ${selectedSounds.join(', ')}`;
});

document.getElementById('stop-track').addEventListener('click', () => {
    players.stopAll();
    document.getElementById('output').textContent = 'Rap stopped.';
});

document.getElementById('record-vocal').addEventListener('click', () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        document.getElementById('output').textContent = 'Recording stopped.';
    } else if (mediaRecorder) {
        recordedChunks = [];
        mediaRecorder.start();
        document.getElementById('output').textContent = 'Recording your rap...';
    }
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

const subjectSelect = document.getElementById('subject-select');
const challengeQuestion = document.getElementById('challenge-question');
const challengeOptions = document.getElementById('challenge-options');

// Dynamically load lesson from JSON
async function loadLesson(subject) {
    const response = await fetch(`assets/lessons/${subject}.json`);
    const lesson = await response.json();

    challengeQuestion.textContent = lesson.question;
    challengeOptions.innerHTML = '';
    lesson.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'challenge-btn';
        button.textContent = option;
        button.dataset.correct = option === lesson.correct;
        challengeOptions.appendChild(button);
    });
    document.getElementById('output').textContent = `Selected lesson: ${lesson.title}. Listen to the rap: "${lesson.lyric}"`;
}

// Listen for subject change and load lesson
subjectSelect.addEventListener('change', () => {
    loadLesson(subjectSelect.value);
});

// Challenge answer logic
challengeOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('challenge-btn')) {
        const isCorrect = e.target.dataset.correct === 'true';
        if (isCorrect) {
            document.getElementById('output').textContent = 'Correct! Unlocked new sound!';
            const newButton = document.createElement('button');
            newButton.className = 'sound-btn';
            newButton.dataset.sound = `newSound${selectedSounds.length + 1}`;
            newButton.textContent = `New Sound ${selectedSounds.length + 1}`;
            document.getElementById('sound-controls').appendChild(newButton);
        } else {
            document.getElementById('output').textContent = 'Wrong answer! Try again.';
        }
    }
});

// Load default lesson on page load
window.addEventListener('DOMContentLoaded', () => {
    loadLesson(subjectSelect.value);
});