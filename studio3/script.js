new fullpage('#fullpage', {
    // Options
    autoScrolling: false,
    scrollHorizontally: true,
    sectionsColor : ['#fe5f46', '#8998ec', '#fc6c7c', '#fec304'],
    navigation: true,
    slidesNavigation: true,

    anchors:['firstPage', 'secondPage', 'thirdPage', 'finalPage'],
    // Names each side dot
    navigationTooltips: ['first', 'second', 'third', 'fourth'],
});

AOS.init();

AOS.init({
    duration: 1200,
})
