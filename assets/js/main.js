//Animate on Scroll
AOS.init();
AOS.init({

  offset: 120,
  delay: 0,
  duration: 700,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});
//


//Dark Mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
//



//Scroll Progress Bar
document.addEventListener("DOMContentLoaded", function(){
  const progressbarinner = document.querySelector('.progress-bar-inner');

  window.addEventListener('scroll', function (){
    let h = document.documentElement;

    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let percent = st / (sh - h.clientHeight) * 100;
    let roundedPercent = Math.round(percent);


    progressbarinner.style.width = percent + "%";
    progressbarinner.innerText = percent;
  })
})
//