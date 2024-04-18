(function(){
    'use strict';

    const body = document.querySelector('body');
    const myVideo = document.querySelector('#myVideo');
    const onClick = document.querySelector('#btn');
    const fs = document.querySelector('.fa-expand');
    
    const source = document.querySelector('source');
    const videos = ['media/scene1.mp4', 'media/scene2.mp4', 'media/scene3.mp4'];
    let index = 0;

    const line1 = document.querySelector ('#line1');
    const line2 = document.querySelector ('#line2');
    const line3 = document.querySelector ('#line3');
    const line4 = document.querySelector ('#line4');
    const line5 = document.querySelector ('#line5');
    const line6 = document.querySelector ('#line6');


    // myVideo.addEventListener('playing', function() {
    //     loading.style.display = 'none';
    // });

    onClick.addEventListener('click', myFunction);
    function myFunction() {
        if (index >= 0 && index <=2) {
            index++;
            
            if (index == 3) {
                index = 0;
            }
        }
            console.log(index);

        source.setAttribute('src', videos[index]);
        myVideo.load();
        myVideo.play();
    }

    myVideo.addEventListener('ended', changeVideo);

    function changeVideo() {
        console.log('video ended');

        // Increment first to avoid using old index
        if (index >= videos.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
        
        source.setAttribute('src', videos[index]);
        myVideo.load();
        myVideo.play();
    }


    const poem = {
        start: [0, 5, 8],
        stop: [4, 7, 10],
        line: [line1, line2, line3]
    }
    const intervalID = setInterval(checkTime, 1000);


    function checkTime() {
        console.log(myVideo.currentTime);
        if (0 < myVideo.currentTime && myVideo.currentTime < 2) {
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }

        if (3 < myVideo.currentTime && myVideo.currentTime < 4) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }

        if (5 < myVideo.currentTime && myVideo.currentTime < 6) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }

        if (7 < myVideo.currentTime && myVideo.currentTime < 8) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }
        console.log(index);
        if (9 < myVideo.currentTime && myVideo.currentTime < 10) {
            line5.className = "showing";
        } else {
            line5.className = "hidden";
        }

        if (11 < myVideo.currentTime && myVideo.currentTime < 15 && index == 1) {
            line6.className = "showing";
        } else {
            line6.className = "hidden";
        }
    }

    fs.addEventListener('click', function() {
        // The fullscreenElement attribute returns null if the element is in windowed mode
        if (!document.fullscreenElement) {
            // document.documentElement returns the Element that is a direct child of the document, the <html> element
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

})();