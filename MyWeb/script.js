//Tự động play video
const video = document.querySelector('.video video');
const mute_btn = document.querySelector('#mute-btn');
const next_video = document.querySelector('.video i');

const videos = [
    {
        vid_src: "../MyWeb/videos/AORUS 15G-15P (RTX 30).mp4"
    },
    {
        vid_src: "../MyWeb/videos/AORUS 17X-15X (2023).mp4"
    },
    {
        vid_src: "../MyWeb/videos/AORUS GeForce RTX 40 Series.mp4"
    }
];

let index = 0;
video.src = videos[index].vid_src;
video.play();

function playNextVideo() {
    video.currentTime = 0;
    video.pause();
    index++;
    if(index >= videos.length) {
        index = 0;
    }
    video.src = videos[index].vid_src;
    video.play();
}

video.addEventListener('ended', playNextVideo);
mute_btn.addEventListener('change', function() {
    if(this.checked == true) {
        video.muted = false;
    }
    else {
        video.muted = true;
    }
});
next_video.addEventListener('click', playNextVideo);