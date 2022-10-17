const splash = document.querySelector('.splash-button');

function mouseSelectedPosition(event, element) {
   let x = event.offsetX;
   let y = event.offsetY;

   // Set new style on selected clicked positions
   element.style.setProperty('--x', x + 'px');
   element.style.setProperty('--y', y + 'px');
   // pixel difference
}

splash.addEventListener('click', (event) => {
   // Remove before adding again instead of listener
   splash.classList.remove('waterdrop');

   let x = event.offsetX;
   let y = event.offsetY;
   // mouseSelectedPosition(event, splash);
   mouseSelectedPosition(event, event.currentTarget);

   splash.classList.add('waterdrop');
   // splash.addEventListener('animationend', () => {
   //    splash.classList.remove('waterdrop');
   // });
});
