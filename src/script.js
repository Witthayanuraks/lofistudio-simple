const youtubePlayer = document.getElementById("youtube-player");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const musicTitle = document.getElementById("music-title");
const timeDisplay = document.getElementById("clock-time");
const ampmDisplay = document.getElementById("clock-ampm");
const fullDateDisplay = document.getElementById("full-date");

// Music List (YouTube Embed Links)
const songs = [
    { title: "Sorry I Like You - Burbank", src: "https://www.youtube.com/embed/GgVcgbtHY9k?enablejsapi=1" },
    { title: "Lofi Chill Beats", src: "https://www.youtube.com/embed/5qap5aO4i9A?enablejsapi=1" },
    { title: "Jazz Coffee Vibes", src: "https://www.youtube.com/embed/Dx5qFachd3A?enablejsapi=1" }
];

let currentSongIndex = 0;
let isPlaying = false;

const loadSong = (index) => {
    youtubePlayer.src = songs[index].src;
    musicTitle.textContent = songs[index].title;
    isPlaying = true;
    playPauseBtn.innerHTML = "⏸"; // Pause icon
};

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        playPauseBtn.innerHTML = "▶"; // Play icon
    } else {
        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        playPauseBtn.innerHTML = "⏸"; // Pause icon
    }
    isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

const updateTime = () => {
    const now = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let month = months[now.getMonth()];
    let day = now.getDate();
    let year = now.getFullYear();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = String(minutes).padStart(2, "0");

    timeDisplay.textContent = `${hours}:${minutes}`;
    ampmDisplay.textContent = ampm;

    fullDateDisplay.textContent = `${month} ${day}, ${year}`;
};

setInterval(updateTime, 1000);
updateTime();

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("bg-gray-100");

    themeToggle.innerHTML = document.body.classList.contains("bg-gray-900") ? "🌙" : "☀️";
});

// Load the first song
loadSong(currentSongIndex);


// const youtubePlayer = document.getElementById("youtube-player");
    // const playPauseBtn = document.getElementById("play-pause");
    // const prevBtn = document.getElementById("prev");
    // const nextBtn = document.getElementById("next");
    // const musicTitle = document.getElementById("music-title");
    // const timeDisplay = document.getElementById("clock-time"); // Target only the time
    // const ampmDisplay = document.getElementById("clock-ampm"); // Target AM/PM

    // // Music List (YouTube Embed Links)
    // const songs = [
    //     { title: "Sorry I Like You - Burbank", src: "https://www.youtube.com/embed/GgVcgbtHY9k?autoplay=1" },
    //     { title: "Lofi Chill Beats", src: "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1" },
    //     { title: "Jazz Coffee Vibes", src: "https://www.youtube.com/embed/Dx5qFachd3A?autoplay=1" }
    // ];

    // let currentSongIndex = 0;
    // let isPlaying = false;

    // const loadSong = (index) => {
    //     youtubePlayer.src = songs[index].src;
    //     musicTitle.textContent = songs[index].title;
    //     isPlaying = true;
    //     playPauseBtn.innerHTML = "⏸"; // Pause icon
    // };

    // playPauseBtn.addEventListener("click", () => {
    //     if (isPlaying) {
    //         youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    //         playPauseBtn.innerHTML = "▶"; // Play icon
    //     } else {
    //         youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    //         playPauseBtn.innerHTML = "⏸"; // Pause icon
    //     }
    //     isPlaying = !isPlaying;
    // });

    // nextBtn.addEventListener("click", () => {
    //     currentSongIndex = (currentSongIndex + 1) % songs.length;
    //     loadSong(currentSongIndex);
    // });

    // prevBtn.addEventListener("click", () => {
    //     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    //     loadSong(currentSongIndex);
    // });

    // const updateTime = () => {
    //     const now = new Date();
    //     let hours = now.getHours();
    //     let minutes = now.getMinutes();
    //     let seconds = now.getSeconds();
    //     const ampm = hours >= 12 ? "PM" : "AM";

    //     hours = hours % 12 || 12;
    //     minutes = String(minutes).padStart(2, "0");
    //     seconds = String(seconds).padStart(2, "0");

    //     timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    //     ampmDisplay.textContent = ampm;
    // };

    // setInterval(updateTime, 1000);
    // updateTime();

    // const themeToggle = document.getElementById("theme-toggle");
    // themeToggle.addEventListener("click", () => {
    //     document.body.classList.toggle("bg-gray-900"); // Dark mode
    //     document.body.classList.toggle("bg-gray-100"); // Light mode

    //     themeToggle.innerHTML = document.body.classList.contains("bg-gray-900") ? "🌙" : "☀️";
    // });

    // // Load the first song on startup
    // loadSong(currentSongIndex);


    // const audio = document.getElementById('audio');
    // const playPauseBtn = document.getElementById('play-pause');
    // const prevBtn = document.getElementById('prev');
    // const nextBtn = document.getElementById('next');
    // const volumeControl = document.getElementById('volume');
    // const musicTitle = document.getElementById('music-title');
    // const timeDisplay = document.getElementById('time-display');
    // const themeToggle = document.getElementById('theme-toggle');

    // const songs = [
    //     { title: "sorry i like you", src: "https://youtu.be/GgVcgbtHY9k?si=lyUDptXhoEToepgo" },
    //     // { title: "sorry i like you", src: "./assets/components/music/burbank_sorry_i_like_you.mp3" },
    //     { title: "Hold On To Me", src: "./assets/components/music/hold_on_to_me.mp3" },
    //     { title: "Sadness", src: "./assets/components/music/sadness.mp3" },
    //     { title: "Sunflower", src: "./assets/components/music/sunflower.mp3" },
    //     { title: "Rainy Lo-Fi Beats", src: "./music/music2.mp3" }
    // ];

    // let currentSongIndex = 0;
    // let isPlaying = false;

    // // Load first song
    // function loadSong(index, autoplay = false) {
    //     audio.src = songs[index].src;
    //     audio.load();
    //     musicTitle.textContent = songs[index].title;
    //     if (autoplay) {
    //         audio.play();
    //         playPauseBtn.textContent = '⏸';
    //         isPlaying = true;
    //     }
    // }
    // loadSong(currentSongIndex);

    // // Play/Pause
    // playPauseBtn.addEventListener('click', () => {
    //     if (audio.paused) {
    //         audio.play();
    //         playPauseBtn.textContent = '⏸';
    //         isPlaying = true;
    //     } else {
    //         audio.pause();
    //         playPauseBtn.textContent = '▶';
    //         isPlaying = false;
    //     }
    // });

    // // Next Song
    // nextBtn.addEventListener('click', () => {
    //     currentSongIndex = (currentSongIndex + 1) % songs.length;
    //     loadSong(currentSongIndex, true);
    // });

    // // Previous Song
    // prevBtn.addEventListener('click', () => {
    //     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    //     loadSong(currentSongIndex, true);
    // });

    // // Volume Control
    // volumeControl.addEventListener('input', () => {
    //     audio.volume = volumeControl.value;
    // });

    // playPauseBtn.addEventListener('click', () => {
    //     if (audio.paused) {
    //         audio.play().catch(error => console.log("Playback Error:", error)); // Catch errors
    //         playPauseBtn.textContent = '⏸';
    //     } else {
    //         audio.pause();
    //         playPauseBtn.textContent = '▶';
    //     }
    // });

    // // Time Display Update
    // function updateTime() {
    //     const now = new Date();
    //     let hours = now.getHours();
    //     let minutes = now.getMinutes();
    //     const ampm = hours >= 12 ? 'PM' : 'AM';
    //     hours = hours % 12 || 12;
    //     minutes = minutes < 10 ? '0' + minutes : minutes;
    //     timeDisplay.textContent = `${hours}:${minutes} ${ampm}`;
    // }
    // setInterval(updateTime, 1000);
    // updateTime();

    // // Toggle Theme (Dark/Light)
    // themeToggle.addEventListener('click', () => {
    //     document.body.classList.toggle('bg-gray-900');
    //     document.body.classList.toggle('bg-gray-100');
    // });
