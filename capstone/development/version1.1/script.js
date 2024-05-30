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

// AOS.init();

AOS.init({
    duration: 1200,
});


// Function to update sidebar text based on scroll position
function updateText() {
    const sections = document.querySelectorAll('.section');
    const text = document.querySelectorAll('.sidebar h2');

    let index = sections.length;
    console.log(sections);

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    // Unecessary, because there's only about 2-3 pieces of text you're changing
    // Might use Spotify design to implement the taking away and adding of text
    // could use window.scrollY logic, if y > # change text (instead of using index)
    // or just change text based on index
    // If you're changing the same index it will always change based on scroll position
    text.forEach(link => link.classList.remove('active'));
    text[index].classList.add('active');

    // Change the text based on the section in view
    // if (index === 0) {
    //     text[0].textContent = 'You are in Section 1';
    //     text[1].textContent = 'Section 2';
    //     text[2].textContent = 'Section 3';
    //     text[3].textContent = 'Section 4';
    // } else if (index === 1) {
    //     text[0].textContent = 'Section 1';
    //     text[1].textContent = 'You are in Section 2';
    //     text[2].textContent = 'Section 3';
    //     text[3].textContent = 'Section 4';
    // } else if (index === 2) {
    //     text[0].textContent = 'Section 1';
    //     text[1].textContent = 'Section 2';
    //     text[2].textContent = 'You are in Section 3';
    //     text[3].textContent = 'Section 4';
    // } else if (index === 3) {
    //     text[0].textContent = 'Section 1';
    //     text[1].textContent = 'Section 2';
    //     text[2].textContent = 'Section 3';
    //     text[3].textContent = 'You are in Section 4';
    // }

    if (index === 0) {
        text[0].textContent = 'You are in Section 1';
        text[1].textContent = 'change 1';
    } else if (index === 1) {
        text[0].textContent = 'You are in Section 2';
    } else if (index === 2) {
        text[0].textContent = 'You are in Section 3';
        text[1].textContent = 'change 2';
    } else if (index === 3) {
        text[0].textContent = 'You are in Section 4';
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', updateText);
