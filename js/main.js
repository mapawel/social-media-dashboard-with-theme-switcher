document.addEventListener('DOMContentLoaded',() => {

const cssColors = document.querySelector('#cssColors');
const knob = document.querySelector('.knob');
const switcherRainbow = document.querySelector('.switcher-rainbow');

const toggle = () => {
    knob.classList.toggle('knob-dark');
    if (cssColors.getAttribute('href') == './css/light.css'){
        cssColors.setAttribute('href','./css/dark.css');
    } else {
        cssColors.setAttribute('href','./css/light.css')
    }
}

switcherRainbow.addEventListener('click',toggle);
knob.addEventListener('click',toggle);

})