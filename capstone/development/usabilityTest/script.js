alert("As the average age of our population continues to rise, this results in an increase of nurses needed. The supply of nurses to meet this demand is in a shortage. Scroll down to learn of John's experience in this shortage. As you scroll, pay attention to the changes within the sidebar.");

new fullpage('#fullpage', {
    // Options
    autoScrolling: false,
    // scrollHorizontally: true,
    sectionsColor : ['#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222'],
    navigation: true,
    slidesNavigation: true,

    anchors:['firstPage', 'secondPage', 'thirdPage', 'finalPage'],
    // Names each side dot
    navigationTooltips: ['Intro', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth'],
});

AOS.init({
    duration: 1200,
});


(function () {
	'use strict';

    const heartRateUpdate = [
        '100 BPM',
        '89 BPM',
        '74 BPM',
        '67 BPM',
        '58 BPM',
        '43 BPM',
        '30 BPM',
		'18 BPM',
		'07 BPM',
		'00 BPM'
    ];

    const conditionUpdate = [
        'Short of breath',
		'chest pain',
        'Seizure'
    ];


    // Select the elements for heart rate and condition display
    let heartRate = document.querySelector('#bpm');
    let condition = document.querySelector('#patientMonitor p');

	let gif = document.querySelector('#patientMonitor #beat');

    // Select all sections
	let sections = document.querySelectorAll('.section');

	let postTops = [];// Array to store top positions of sections
	let pageTop; // Variable to store the current scroll position
	let counter = 0;  // Counter to track current section
	let prevCounter = -1;  // Previous counter value to detect changes


    // Function to reset the positions of sections
	function resetPagePosition() {
		postTops = [];
		 // Calculate the top position of each section and store in postTops
		sections.forEach((section) => {
			postTops.push(Math.floor(section.getBoundingClientRect().top) + window.scrollY);
		});


        // Adjust the counter based on the current scroll position
		const pagePosition = window.scrollY + 300;
		counter = 0;
		postTops.forEach((post, index) => {
			if (pagePosition > post) {
				counter = index;
			}
		});
	}

    // Function to update heart rate and condition based on the current section
	function updateInfo(counter) {
		heartRate.textContent = heartRateUpdate[counter % heartRateUpdate.length];
		condition.textContent = conditionUpdate[counter % conditionUpdate.length];
	}

    // Event listener for scroll events
	window.addEventListener('scroll', () => {
		pageTop = window.scrollY + 300; // Calculate the adjusted scroll position

		// Determine the current section based on scroll position
		for (let i = 0; i < postTops.length; i++) {
			if (pageTop > postTops[i]) {
				counter = i;
			}
		}

        // If the section has changed, update the info and previous counter
		if (counter !== prevCounter) {
			updateInfo(counter);
			prevCounter = counter;
		}

		// if (counter == 9) {
		// 	gif.src = "images/heartMon.jpeg";
		// } else {
		// 	gif.src = "images/heartMon.gif";
		// }
	});

    // Event listener for resize events to recalculate section positions
	window.addEventListener('resize', () => {
		resetPagePosition();  // Recalculate section positions on window resize
	});


    // Initial call to set up the page positions
	resetPagePosition();

	var slider = document.getElementById("myRange");
    var output = document.getElementById("number");
    let slideImg = document.querySelector('#nprDemo');
	let turnover = document.querySelector('#turnover');
	let population = document.querySelector('#population');

	const yearNPR = [
		'',
		'2017',
        '2018',
		'2019',
        '2020',
		'2021',
		'2022'
    ];

	const turnoverRate = [
		'',
		'16.8%',
        '17.2%',
		'15.9%',
        '18.7%',
		'27.1%',
		'22.5%'
    ];

	const agingPopulation = [
		'',
		'52.6 Million',
        '54.4 Million',
		'56.2 Million',
        '58 Million',
		'59.8 Million',
		'61.6 Million'
    ];

    // Default display
    output.innerHTML = yearNPR[slider.value];
    
    slider.oninput = function() {
        console.log(this.value);
        output.innerHTML = yearNPR[this.value];
		turnover.innerHTML = turnoverRate[this.value];
		population.innerHTML = agingPopulation[this.value];

        if (this.value == 1) {
            slideImg.src = "https://placehold.jp/350x200.png";
        } else if (this.value == 2) {
            slideImg.src = "https://placehold.jp/3d4070/ffffff/350x200.png";
        } else if (this.value == 3) {
            slideImg.src = "https://placehold.jp/3e704d/ffffff/350x200.png";
        } else if (this.value == 4) {
            slideImg.src = "https://placehold.jp/703e3e/ffffff/350x200.png";
        } else if (this.value == 5) {
            slideImg.src = "https://placehold.jp/703e6e/ffffff/350x200.png";
        } else if (this.value == 6) {
            slideImg.src = "https://placehold.jp/6f703e/ffffff/350x200.png";
        }
    }

})(); // END IIFE