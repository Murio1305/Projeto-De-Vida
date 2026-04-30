window.onload = function () {

    function updateTimer(targetDate, timerId, progressId, percentId) {

        const start = new Date("2025-01-01").getTime();
        const target = new Date(targetDate).getTime();
        const total = target - start;

        setInterval(function () {

            const now = new Date().getTime();
            const distance = target - now;

            const timer = document.getElementById(timerId);
            const progress = document.getElementById(progressId);
            const percent = document.getElementById(percentId);

            if (!timer || !progress || !percent) return;

            if (distance < 0) {
                timer.innerHTML = "Meta concluída!";
                progress.style.width = "100%";
                percent.innerHTML = "100%";
                return;
            }

            // TEMPO
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            timer.innerHTML = days + "d " + hours + "h " + minutes + "m";

            // PROGRESSO
            let progressValue = ((now - start) / total) * 100;

            if (progressValue < 0) progressValue = 0;
            if (progressValue > 100) progressValue = 100;

            progress.style.width = progressValue + "%";
            percent.innerHTML = progressValue.toFixed(1) + "%";

        }, 1000);
    }

    updateTimer("2026-01-01", "timer1", "progress1", "percent1");
    updateTimer("2025-12-31", "timer2", "progress2", "percent2");
    updateTimer("2026-12-31", "timer3", "progress3", "percent3");
    updateTimer("2026-11-08", "timer4", "progress4", "percent4");
    updateTimer("2026-12-15", "timer5", "progress5", "percent5");

};
