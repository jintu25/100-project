let timerInterval;
let seconds = 0;

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const timerDisplay = document.getElementById('timer');
const logList = document.getElementById('log-list');

// Format time in HH:MM:SS
function formatTime(sec) {
    const hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
    const mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    const secs = (sec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Update the timer display
function updateTimer() {
    timerDisplay.textContent = formatTime(seconds);
}

// Start the timer
function startTimer() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);

    addLog('Timer started');
}

// Stop the timer
function stopTimer() {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(timerInterval);

    addLog('Timer stopped');
}

// Add a log entry
function addLog(message) {
    const logEntry = document.createElement('li');
    const timestamp = new Date().toLocaleTimeString();
    logEntry.textContent = `${message} at ${timestamp}`;
    logList.appendChild(logEntry);
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
