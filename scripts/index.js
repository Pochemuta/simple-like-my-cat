function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function countdownTimeStart() {
    const editorTimerElement = document.getElementById("editorTimer");
    const editorTextarea = document.querySelector('textarea');

    // Устанавливаем время (пример: 1 час, 0 минут, 1 секунда)
    const hours = 1; // Установите необходимое время
    const minutes = 0; // Установите необходимое время
    const seconds = 1; // Установите необходимое время

    const endTime = new Date().getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);

    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = endTime - now;

        if (timeRemaining <= 0) {
            editorTimerElement.innerHTML = "Time is over.";
            editorTextarea.setAttribute('readonly', true); // Блокируем ввод
            clearInterval(timerInterval); // Остановка таймера
        } else {
            const hours = formatTime(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = formatTime(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
            const seconds = formatTime(Math.floor((timeRemaining % (1000 * 60)) / 1000));

            editorTimerElement.innerHTML = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}
