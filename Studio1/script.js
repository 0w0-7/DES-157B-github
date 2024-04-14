(function(){
    'use strict';

    const line1 = document.querySelector ('#line1');
    const line2 = document.querySelector ('#line2');
    const line3 = document.querySelector ('#line3');
    const line4 = document.querySelector ('#line4');
    const line5 = document.querySelector ('#line5');
    const line6 = document.querySelector ('#line6');

    const myVideo = document.querySelector('#myVideo');

    const intervalID = setInterval(checkTime, 1000);


    const source = document.querySelector('source');
    const videos = ['media/scene2.mp4', 'media/scene3.mp4', 'media/scene1.mp4'];
    let index = 0;


    // if vid 1 is playing and time is between 0 and 5 display line 1
    // if vid 2 is playing and time is between 6 and 10 display line 4
    // I need to use something to check which video is on
    // Need to make video transition from grayscale to color
    // Style text to the left
    // Don't hide text until next change in video

    function checkTime() {
        console.log(myVideo.currentTime);
        if (0 < myVideo.currentTime && myVideo.currentTime < 5) {
            line1.className = "showing";
        } else {
            // line1.className = "hidden";
        }

        if (6 < myVideo.currentTime && myVideo.currentTime < 10) {
            line2.className = "showing";
        } else {
            // line2.className = "hidden";
        }

        if (11 < myVideo.currentTime && myVideo.currentTime < 15) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }

        if (16 < myVideo.currentTime && myVideo.currentTime < 20) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }
        
        if (11 < myVideo.currentTime && myVideo.currentTime < 15) {
            line5.className = "showing";
        } else {
            line5.className = "hidden";
        }

        if (11 < myVideo.currentTime && myVideo.currentTime < 15) {
            line6.className = "showing";
        } else {
            line6.className = "hidden";
        }
    }


    myVideo.addEventListener('ended', changeVideo);

    function changeVideo() {
        console.log('video ended');

        source.setAttribute('src', videos[index]);
        myVideo.load();
        myVideo.play();
        
        if (index >= videos.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }

})();