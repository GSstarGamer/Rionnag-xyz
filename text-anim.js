const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
setTimeout(function () {
    // Hide the loading animation
    document.querySelector(".loading").style.display = "none";

    // Show the content
    document.querySelector(".content").style.display = "block";

    // Start the animation
    const elements = document.querySelectorAll("[data-value]");
    elements.forEach(el => {
        let iteration = 0;
        const interval = setInterval(() => {
            el.innerText = el.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return el.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            if (iteration >= el.dataset.value.length) {
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, 50);
    });
}, 5000);
