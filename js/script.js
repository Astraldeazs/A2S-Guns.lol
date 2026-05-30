const enter = document.getElementById("enter-screen");
const music = document.getElementById("music");

enter.addEventListener("click", () => {

    music.volume = 0;

    music.play();

    let volume = 0;

    const fade = setInterval(() => {

        if (volume < 0.5) {
            volume += 0.02;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }

    }, 100);

    enter.style.opacity = "0";

    setTimeout(() => {
        enter.remove();
    }, 700);

});

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    document.querySelectorAll(".card").forEach(card => {
        card.style.transform =
            `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

});