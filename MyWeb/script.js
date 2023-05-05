//Tự động play video
const video = document.querySelector('.video video');
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

// const item = videos[0].vid_src;
// video.src = item;
// console.log(video.duration);

// for (let i of videos) {
//     const vid__src = videos[i].vid_src;
//     video.src = vid__src;
//     video.play();
//     setTimeout(video.length);
// }