const toggleButton = document.querySelector('.toggle-button')
const links = document.querySelector('.sidebar__links')

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})


const tl = gsap.timeline({defaults: {ease: 'power1.out' }});

tl.to('.text', {y: '0%', duration: 1, stagger: 0.12 });
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', {y: '-100%', duration: .3 }, "-=1.1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: .8});
// tl.from('.sidebar__link', {duration: .3, opacity: 0, stagger: .5 })
tl.fromTo('.bg-intro', {opacity: 0}, {opacity: 1, duration: 1.2 }, "-=1.4")


