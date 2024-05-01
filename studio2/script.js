(function(){
    'use strict';

    const onClick = document.querySelector('#btn');
    let index = 1;
    let globalData;

    const img = document.querySelector('img');
    const songImg = [
        '<img id="songImage" src="images/song1.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song2.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song3.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song4.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song5.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song6.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song7.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song8.jpeg" alt="Song Image">',
        '<img id="songImage" src="images/song9.jpeg" alt="Song Image">'
    ];


    // data
    async function getData(){
        const songs = await fetch('data/data.json');
        const data = await songs.json();

        globalData = data;
        const dataPoints = Object.keys(data);
        console.log(dataPoints);

        document.querySelector('#container').innerHTML = outputHTML(data, 'song1');
    }
    getData();


    onClick.addEventListener('click', changeSong);
    function changeSong() {
        console.log(globalData);
        
        if (index <= songImg.length - 1) {
            index++;
            
        } else {
            index = 1;
        }

        const thisSong = `song${index}`;
        document.querySelector('#container').innerHTML = outputHTML(globalData, thisSong);

        //console.log(index);
    }


    function outputHTML(data, thisSong){
        // console.log(data);

        let html = '';

        html += `<img id="songImage" src="images/song${index}.jpeg" alt="Song Image">

        <div id="info">
            <h2 id="title">${data[thisSong].title}</h2>
            <p id="author">${data[thisSong].author}</p>
            <p id="time">${data[thisSong].time}</p>
        </div>`;

        return html;
    }

}());