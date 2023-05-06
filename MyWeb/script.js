//--------------------------------------------------------------------

//Show sidebar menu
const showSidebarBtn = document.getElementById('show-sidebar')
const closeSidebarBtn = document.getElementById('close-sidebar')
const sidebar = document.querySelector('.mobile-sidebar-menu');
const overlay = document.querySelector('.overlay');

showSidebarBtn.addEventListener('click', () => {
    sidebar.style.left = 0;
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', () => {
    sidebar.style.left = '-100%';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.left = '-100%';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

//Show sidebar list item
const showSidebarListItem = document.querySelectorAll('.mobile-sidebar-menu > ul > li');

showSidebarListItem.forEach(function(showSbListItem) {
    const sidebarListItemBtn = showSbListItem.querySelector('#show-sidebar-list-item');
    const sidebarListItem = showSbListItem.querySelector('.sidebar-menu-item');

    sidebarListItemBtn.addEventListener('click', () => {
        sidebarListItem.classList.toggle('open');
        sidebarListItemBtn.classList.toggle('rotateBtn');
    });
});


//Tự động play video
const video = document.querySelector('.video video');
const mute_btn = document.querySelector('#mute-btn');
const next_video = document.querySelector('.video-pause-next-pre .fa-forward-step');
const pre_video = document.querySelector('.video-pause-next-pre .fa-backward-step');
const pause_video = document.getElementById('pause-video');

const videos = [
    {
        vid_src: "../MyWeb/videos/AORUS 15G-15P (RTX 30).mp4"
    },
    {
        vid_src: "../MyWeb/videos/2022 ROG Flow Z13 - One Device Infinite Play.mp4"
    },
    {
        vid_src: "../MyWeb/videos/AORUS 17X-15X (2023).mp4"
    },
    {
        vid_src: "../MyWeb/videos/AERO 16 OLED (2023).mp4"
    },
    {
        vid_src: "../MyWeb/videos/CES 2023 All New ROG Gaming Laptops.mp4"
    },
    {
        vid_src: "../MyWeb/videos/AORUS GeForce RTX 40 Series.mp4"
    },
    {
        vid_src: "../MyWeb/videos/Z790 AORUS XTREME.mp4"
    },
    {
        vid_src: "../MyWeb/videos/AORUS STEALTH 500 - Build The Changer.mp4"
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
    pause_video.checked = false;
}

function playPreVideo() {
    video.currentTime = 0;
    video.pause();
    index--;
    if(index < 0) {
        index = videos.length - 1;
    }
    video.src = videos[index].vid_src;
    video.play();
    pause_video.checked = false;
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

pause_video.addEventListener('change', function() {
    if(this.checked == true) {
        video.pause();
    }
    else {
        video.play();
    }
});

next_video.addEventListener('click', playNextVideo);
pre_video.addEventListener('click', playPreVideo);