document.addEventListener('DOMContentLoaded', () => {

    const cssColors = document.querySelector('#cssColors');
    const knob = document.querySelector('.knob');
    const switcher = document.querySelector('.switcher');

    const toggle = () => {
        knob.classList.toggle('knob-dark');
        if (cssColors.getAttribute('href') == './css/light.css') {
            cssColors.setAttribute('href', './css/dark.css');
        } else {
            cssColors.setAttribute('href', './css/light.css')
        }
    }

    switcher.addEventListener('click', toggle);

})