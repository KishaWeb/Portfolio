document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const aboutMeElement = document.querySelector('.AboutMe');

  if (aboutMeElement) {
      const lines = aboutMeElement.innerHTML.split('<br>');
      
      const processedLines = lines.map(line => {
          const chars = line.split('');
          return chars.map(char => `<span>${char}</span>`).join('');
      });

      aboutMeElement.innerHTML = processedLines.join('<br>');

      gsap.fromTo(aboutMeElement.querySelectorAll('span'), 
          { 
              color: '#CCCCCC',
              opacity: 0.5
          },
          {
              scrollTrigger: {
                  trigger: aboutMeElement,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1,
              },
              color: '#000000',
              opacity: 1,
              duration: 1,
              ease: 'power2.inOut',
              stagger: {
                  each: 0.05,
                  from: "start"
              }
          }
      );
  }
});


document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const accordionItems = document.querySelectorAll('.relative');

  accordionItems.forEach((item) => {
      gsap.set(item, { 
          clipPath: 'inset(0 100% 0 0)',
          webkitClipPath: 'inset(0 100% 0 0)'
      });

      ScrollTrigger.create({
          trigger: item,
          start: 'top bottom-=100',
          onEnter: () => animateAccordion(item),
          once: true
      });
  });

  function animateAccordion(item) {
      gsap.to(item, {
          clipPath: 'inset(0 0% 0 0)',
          webkitClipPath: 'inset(0 0% 0 0)',
          duration: 0.8,
          ease: 'power2.out'
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.querySelector('.button-container');
    const fillEffect = buttonContainer.querySelector('.fill-effect');
    const svg = buttonContainer.querySelector('.button-svg-arrow');
    const button = buttonContainer.querySelector('.button-arrow');
  
    buttonContainer.addEventListener('mouseenter', () => {
      gsap.to(fillEffect, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(svg, {
        fill: 'white',
        duration: 0.3
      });
      gsap.to(button, {
        backgroundColor: 'black',
        duration: 0.5
      });
    });
  
    buttonContainer.addEventListener('mouseleave', () => {
      gsap.to(fillEffect, {
        scale: 0,
        duration: 0.5,
        ease: 'power2.in'
      });
      gsap.to(svg, {
        fill: 'black',
        duration: 0.3
      });
      gsap.to(button, {
        backgroundColor: 'transparent',
        duration: 0.5
      });
    });
  });
  