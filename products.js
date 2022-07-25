const toggleButton = document.querySelector('.toggle-button')
const links = document.querySelector('.sidebar__links')

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})

// gsap.registerPlugin(ScrollTrigger)

// gsap.to('.title--one, .title--three', {
//     scrollTrigger: {
//         trigger: '.title--one, .title--three',
//         start: 'top center',
//         toggleActions: 'restart pause resume pause'
//     },
//     x: 100,
//     duration: 1,  
//     ease: 'back'
// });

// gsap.to('.title--two', {
//     scrollTrigger: {
//         trigger: '.title--two',
//         start: 'top center',
//         toggleActions: 'restart pause resume pause'
//     },
//     x: -100,
//     duration: 1, 
//     ease: 'back'
// });

gsap.to('.title--one, .title--three', {duration: 1, x: 100, ease: 'back'})
gsap.to('.title--two', {duration: 1, x: -100, ease: 'back'})


gsap.to('.panel__text', {
    scrollTrigger: {
        trigger: '.panel__text',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: .7
})



// gsap.from('.title--one, .title--two, .title--three', {duration: 1, opacity: 0, x: 'random(-200, 200)', stagger: 0.25})

//for sliders
gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
});
  
  
// ScrollTrigger.create({
// snap: 1 / 4 // snap whole page to the closest section!
// });
  
gsap.to('.panel2__img', {
    scrollTrigger: {
        trigger: '.panel2',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
   
    y: -50,
    scale: 1.1,
    duration: 1
})

gsap.to('.panel3__img1', {
    scrollTrigger: {
        trigger: '.panel3__img1',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
   
    x: 220,
    duration: 1.5,  
    ease: 'power1.out'
})

gsap.to('.panel3__img2', {
    scrollTrigger: {
        trigger: '.panel3__img2',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
   
    x: -220,
    duration: 1.5,  
    ease: 'power1.out'
})





gsap.to('.dark-section__text', {
    scrollTrigger: {
        trigger: '.dark-section',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
   y: -200,
   duration: 1
    
});

gsap.to('.dark-section__span', {
    scrollTrigger: {
        trigger: '.dark-section',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
    y: 0,
    opacity: 1,
    duration: 2,
    
});


gsap.to('#middle-paragraph', {
    scrollTrigger: {
        trigger: '#paragraph-trigger',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
    y: 100 ,
    duration: .5,
    
});

// middle-paragraph


gsap.to('#landscape-img', {
    scrollTrigger: {
        trigger: '#paragraph-trigger',
        start: 'top center',
        toggleActions: 'restart pause reverse pause'
    },
   y: 120,
   duration: 1
    
});




/* for mobile*/
gsap.to('.panel3__img1--s', {
    scrollTrigger: {
        trigger: '.panel3',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
   
    scale: 1.1,
    duration: 1
})

gsap.to('.panel3__img2--s', {
    scrollTrigger: {
        trigger: '.panel3',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
   
    y: -80,
    scale: 1.2,
    duration: 1
})

gsap.to('#last-paragraph', {
    scrollTrigger: {
        trigger: '#paragraph-trigger',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
    y: -235 ,
    duration: 1,
    
});

gsap.to('#closing-img', {
    scrollTrigger: {
        trigger: '#closing-img',
        start: 'top center',
        toggleActions: 'restart pause resume pause'
    },
    y: -70 ,
    duration: 1,
    
});