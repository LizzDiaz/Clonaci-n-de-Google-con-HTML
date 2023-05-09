gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav")

links.forEach(link => {
      link.addEventListener('click', () => {

            gsap.to(links, { color: "#0c443a" });
            if (document.activeElement === link) {
                  gsap.to(link, { color: "#25d1b2" });
            }

            const state = Flip.getState(activeNav);
            link.appendChild(activeNav);
            Flip.from(state, {
                  duration: 1.25,
                  absolute: true,
                  ease:"elastic.out(1,0.5)",
            })
      }); 
});


const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
      "linear-gradient(to right top, #ffffff, #cf0c0c)",
      "linear-gradient(to right top, #661a1a, #ffffff)",
      "linear-gradient(to right top, #ffffff, #5f0a0a)",
      "linear-gradient(to right top, #3f2a2a, #ffffff)",
      "linear-gradient(to right top, #af4343, #ffffff)",
      "linear-gradient(to right top, #ffffff, #e61313)",
      
];

const options = {

      threshold: 0.7

};


let observer = new IntersectionObserver(navcheck, options);

function navcheck(entries) {
      entries.forEach(entry => {
            const className = entry.target.className;
            const activeAnchor = document.querySelector(`[data-page=${className}]`);
            const gradientIndex = entry.target.getAttribute('data-index');
            const coords = activeAnchor.getBoundingClientRect();
            const directions = {
                  height: coords.height,
                  width: coords.width,
                  top: coords.top,
                  left: coords.left
            };

            if (entry.isIntersecting) {
                  bubble.style.setProperty('left', `${directions.left}px`);
                  bubble.style.setProperty('top', `${directions.top}px`);
                  bubble.style.setProperty('width', `${directions.width}px`);
                  bubble.style.setProperty('height', `${directions.heigth}px`);
                  bubble.style.background = gradients[gradientIndex];
            }
      });
}

sections.forEach(section => {
      observer.observe(section);
});







const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
      card.addEventListener("click", () => {

            const state = Flip.getState(cards);
            
            const isCardActive = card.classlist.contains(".active");
            cards.forEach((otherCard, otherIdx) => {
                  otherCard.classlist.remove("active");
                  otherCard.classlist.remove("is-inactive");
                  if (!isCardActive && index !== otherIdx) {
                        otherCard.classlist.add("is-inactive");
                  }
            });

            if (!isCardActive) card.classlist.add("active");

            Flip.from(state, {
                  duration: 1,
                  ease: "expo.out",
                  absolute: true,
                  onComplete: () => {
                        gsap.to('card p', { y: 500 })
                  }

            });

      });
});



const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){

                    e.preventDefault();
                    let mail = document.getElementById('email-form').value
                    console.log(mail)
})


//const formulario = document.getElementById('form')
const checkbox =document.getElementById('activador')
checkbox,addEventListener('change', e =>{
                    if (e.target.checked){
                    console.log('SU SOLICITUD ES ACEPTADA')

                    }
                    else{
                          console.log('ACTIVE LA SOLICITUD POR FAVOR ')             
                    }
})

const video_mp4 = document.getElementById('video'),
       boton_play = document.getElementById('play'),
       boton_pause = document.getElementById('pause');

boton_play.addEventListener('click', ()=>{
                    video_mp4.play()
})

boton_pause.addEventListener('click', () => {
                    video_mp4.pause()
})



