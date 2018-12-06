import '../../node_modules/pickr-widget/dist/pickr.min.css';
import Pickr from '../../node_modules/pickr-widget/dist/pickr.min.js';  // Javascript
const bgpickr = Pickr.create({
    el: '.bg-picker',

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true
        },

        onChange(hsva) {
			// var bg = document.getElementById('background')
			// bg.style.backgroundColor = hsva.toHEX();
			document.body.style.backgroundColor = hsva.toHEX();
   		}
    }
});
const itempickr = Pickr.create({
    el: '.item-picker',

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsva: true,            
            input: true,
            clear: true,
            save: true
        },

        onChange(hsva) {
			// if(document.getElementsByClassName('val'))
			// {
			// document.getElementsByClassName('val').style.color = hsva.toHEX();
			// }

   		}
    }
});

