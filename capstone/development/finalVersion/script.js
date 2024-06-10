// alert("As the average age of our population continues to rise, this results in an increase of nurses needed. The supply of nurses to meet this demand is in a shortage. Scroll down to learn of John's experience in this shortage. As you scroll, pay attention to the changes within the sidebar.");


new fullpage('#fullpage', {
    // Options
    autoScrolling: false,
    scrollHorizontally: true,
    sectionsColor : ['#E3E7F6', '#E3E7F6', '#E3E7F6', '#E3E7F6', '#E3E7F6', '#E3E7F6', '#E3E7F6', '#E3E7F6', '#E3E7F6', '#E3E7F6'],
    navigation: true,
    slidesNavigation: true,
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
    navigationTooltips: ['Intro', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth', 'ninth', 'tenth', 'eleventh'],
});

AOS.init({
    duration: 1200,
});


(function () {
	'use strict';

    const heartRateUpdate = [
        '100 BPM',
        '87 BPM',
        '72 BPM',
        '54 BPM',
		'32 BPM',
        '18 BPM',
		'00 BPM',
		'00 BPM',
		'00 BPM',
		'00 BPM',
		'00 BPM',
		'00 BPM'

        // '43 BPM',
        // '30 BPM',
		// '18 BPM',
		// '07 BPM',
		// '00 BPM'
    ];

    const conditionUpdate = [
		'----------',
		'Heart racing',
        'Short of breath',
		'Visual Disturbances/Lightheaded',
        'Seizure',
		'Loss of Consciousness',
		'Cardiac Arrest',
		'Deceased',
		'Deceased',
		'Deceased',
		'Deceased'
    ];


    // Select the elements for heart rate and condition display
    let heartRate = document.querySelector('#bpm');
    let condition = document.querySelector('#patientMonitor span');

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
    let slideImg = document.querySelector('#nurseDemo');
	let turnover = document.querySelector('#turnover');
	let population = document.querySelector('#population');
	let nurseCondition = document.querySelector('#nurseCondition');

	var healthBar = document.getElementById("healthBar");

	const conditionOverTime = [
		'',
		'Start of Shift: Optimistic - Starts in full gear, handles immediate patient needs,  ensuring a smooth handover from the previous shift',
        'Early Shift: Focused - Administers medications, managing patient and family concerns, ensuring accurate documentation',
		'Mid Shift: Busy and Stressed - Peak influx of patient admissions / discharges, staff shortage, skipped lunch',
		'Mid-Late Shift: Fatigued - Assisting with unexpected complex surgeries, addressing medication errors',
        // 'Mid-Late Shift: Fatigued - Addressing medication errors / treatment reactions',
		'Late Shift: Resilient but Exhausted - final medication rounds, updating patient charts, preparing handover reports for incoming shift'
    ];

	const conditionPhrase = [
		'',
		'Start of Shift: Optimistic and Energetic',
		'Early Shift: Focused and Diligent',
		'Mid-Shift: Busy and Stressed',
		'',
		''
	]

	const turnoverRate = [
		'',
		'16.8%',
        '17.2%',
		'15.9%',
        '18.7%',
		'27.1%'
    ];

	const agingPopulation = [
		'',
		'52.6 Million',
        '54.4 Million',
		'56.2 Million',
        '58 Million',
		'59.8 Million'
    ];

    // Default display
    output.innerHTML = conditionOverTime[slider.value];
    
    slider.oninput = function() {
        console.log(this.value);
        output.innerHTML = conditionOverTime[this.value];
		// nurseCondition.innerHTML = conditionPhrase[this.value];
		// turnover.innerHTML = turnoverRate[this.value];
		// population.innerHTML = agingPopulation[this.value];
		

        // if (this.value == 1) {
        //     slideImg.src = "https://placehold.jp/350x170.png";
        // } else if (this.value == 2) {
        //     slideImg.src = "https://placehold.jp/3d4070/ffffff/350x170.png";
        // } else if (this.value == 3) {
        //     slideImg.src = "https://placehold.jp/3e704d/ffffff/350x170.png";
        // } else if (this.value == 4) {
        //     slideImg.src = "https://placehold.jp/703e3e/ffffff/350x170.png";
        // } else if (this.value == 5) {
        //     slideImg.src = "https://placehold.jp/703e6e/ffffff/350x170.png";
        // }

		var healthPercentage = ((slider.max - this.value + 1) / slider.max) * 100;
			healthBar.style.width = healthPercentage + '%';
	
			// Change color based on health percentage
			if (healthPercentage > 66) {
				healthBar.style.backgroundColor = '#319635';
			} else if (healthPercentage > 33) {
				healthBar.style.backgroundColor = '#B7A542';
			} else {
				healthBar.style.backgroundColor = '#A82F2F';
			}
    }

	// Initialize the health bar
	slider.oninput();


})(); // END IIFE


// Pop Up Instructions
function showNextPopup(currentPopupId) {
    var currentPopup = document.getElementById("popup" + currentPopupId);
    var nextPopup = document.getElementById("popup" + (currentPopupId + 1));
    
    currentPopup.style.display = "none";
    if (nextPopup) {
        // Set predefined positions for each pop-up
        const positions = {
            2: { top: '100px', left: '390px' },
            3: { top: '330px', left: '390px' }
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
    firstPopup.style.top = '60px';
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
// Chart 1

let delayed;
const ctx = document.getElementById('myChart1').getContext("2d");

const data = {
  labels: [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
  datasets: [{
    label: '% of Total Population',
    data: [4.8, 5.3, 6.7, 8.1, 9, 9.9, 11.3, 12.6, 12.4, 13, 16.8],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
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
        stacked: true,
        beginAtZero: true
      }
    }
  }
};

new Chart(ctx, config);

// Chart 2
// const ctx2 = document.getElementById('myChart2').getContext("2d");

// const data2 = {
//   labels: [1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
//   datasets: [{
//     label: '% of Total Population',
//     data: [4.8, 5.3, 6.7, 8.1, 9, 9.9, 11.3, 12.6, 12.4, 13, 16.8],
//     borderWidth: 1
//   }]
// };

// const config2 = {
//   type: 'line',
//   data: data2,
//   options: {
//     responsive: true,
//     animation: {
//       onComplete: () => {
//         delayed = true;
//       },
//       delay: (context) => {
//         let delay = 0;
//         if (context.type === 'data' && context.mode === 'default' && !delayed) {
//           delay = context.dataIndex * 300 + context.datasetIndex * 100;
//         }
//         return delay;
//       },
//     },
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//         beginAtZero: true
//       }
//     }
//   }
// };

// new Chart(ctx2, config2);




// let delayed;
// const ctx = document.getElementById('myChart').getContext("2d");

// new Chart(ctx, {
//   type: 'bar',
//   data: {
// 	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// 	datasets: [{
// 	  label: '# of Votes',
// 	  data: [12, 19, 3, 5, 2, 3],
// 	  borderWidth: 1
// 	}]
//   },
//   options: {
// 	scales: {
// 	  y: {
// 		beginAtZero: true
// 	  }
// 	}
//   }
// });

// const config = {
//   type: 'bar',
//   data: data,
//   options: {
// 	responsive: true,
//     animation: {
//       onComplete: () => {
//         delayed = true;
//       },
//       delay: (context) => {
//         let delay = 0;
//         if (context.type === 'data' && context.mode === 'default' && !delayed) {
//           delay = context.dataIndex * 300 + context.datasetIndex * 100;
//         }
//         return delay;
//       },
//     },
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true
//       }
//     }
//   }
// };

// ---------------------------

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