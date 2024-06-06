// alert("As the average age of our population continues to rise, this results in an increase of nurses needed. The supply of nurses to meet this demand is in a shortage. Scroll down to learn of John's experience in this shortage. As you scroll, pay attention to the changes within the sidebar.");


new fullpage('#fullpage', {
    // Options
    autoScrolling: false,
    scrollHorizontally: false,
    sectionsColor : ['#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222', '#222222'],
    navigation: true,
    slidesNavigation: false,
	scrollOverflow: false,
	isResponsive: false,
	fitToSection: false,
	// easingcss3: 'ease',
	// scrollingSpeed: 300,
	// scrollingSpeed: 0,

	// Scrolling
	// fitToSectionDelay: 0,

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


function showNextPopup(currentPopupId) {
    var currentPopup = document.getElementById("popup" + currentPopupId);
    var nextPopup = document.getElementById("popup" + (currentPopupId + 1));
    
    currentPopup.style.display = "none";
    if (nextPopup) {
        // Set predefined positions for each pop-up
        const positions = {
            2: { top: '130px', left: '390px' },
            3: { top: '400px', left: '390px' }
        };

        // Apply predefined positions if available
        if (positions[currentPopupId + 1]) {
            nextPopup.style.top = positions[currentPopupId + 1].top;
            nextPopup.style.left = positions[currentPopupId + 1].left;
        }
        
        nextPopup.style.display = "block";
    }
}

function startPopups() {
    var firstPopup = document.getElementById("popup1");
    firstPopup.style.top = '65px';
    firstPopup.style.left = '390px';
    firstPopup.style.display = "block";
}

// Hide all popups on load
window.onload = function() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
};


// chart.js
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [{
	  label: '# of Votes',
	  data: [12, 19, 3, 5, 2, 3],
	  borderWidth: 1
	}]
  },
  options: {
	scales: {
	  y: {
		beginAtZero: true
	  }
	}
  }
});



let delayed;
const config = {
  type: 'bar',
  data: data,
  options: {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
};

// // <block:actions:2>
// const actions = [
// 	{
// 	  name: 'Randomize',
// 	  handler(chart) {
// 		chart.data.datasets.forEach(dataset => {
// 		  dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
// 		});
// 		chart.update();
// 	  }
// 	},
//   ];
//   // </block:actions>
  
//   // <block:setup:1>
//   const DATA_COUNT = 7;
//   const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
  
//   const labels = Utils.months({count: 7});
//   const data = {
// 	labels: labels,
// 	datasets: [
// 	  {
// 		label: 'Dataset 1',
// 		data: Utils.numbers(NUMBER_CFG),
// 		backgroundColor: Utils.CHART_COLORS.red,
// 	  },
// 	  {
// 		label: 'Dataset 2',
// 		data: Utils.numbers(NUMBER_CFG),
// 		backgroundColor: Utils.CHART_COLORS.blue,
// 	  },
// 	  {
// 		label: 'Dataset 3',
// 		data: Utils.numbers(NUMBER_CFG),
// 		backgroundColor: Utils.CHART_COLORS.green,
// 	  },
// 	]
//   };
//   // </block:setup>
  
//   // <block:config:0>
//   let delayed;
//   const config = {
// 	type: 'bar',
// 	data: data,
// 	options: {
// 	  animation: {
// 		onComplete: () => {
// 		  delayed = true;
// 		},
// 		delay: (context) => {
// 		  let delay = 0;
// 		  if (context.type === 'data' && context.mode === 'default' && !delayed) {
// 			delay = context.dataIndex * 300 + context.datasetIndex * 100;
// 		  }
// 		  return delay;
// 		},
// 	  },
// 	  scales: {
// 		x: {
// 		  stacked: true,
// 		},
// 		y: {
// 		  stacked: true
// 		}
// 	  }
// 	}
//   };
//   // </block:config>
  
//   module.exports = {
// 	actions: actions,
// 	config: config,
//   };