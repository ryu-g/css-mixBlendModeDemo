import '../style/pickr.min.css';
import Pickr from '../script/pickr.min.js';
console.log("loaded Picker");

var bgpickr = new Pickr({
    el: '.bg-picker',

    components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true
        },
	},
        onChange(hsva) {
			var bg = document.getElementById('background')
			bg.style.backgroundColor = hsva.toHEX();
			// document.body.style.backgroundColor = hsva.toHEX();
			console.log(hsva);
			save();
   		},
   		onSave(hsva){
   			console.log(hsva);
   		}
    
});


var itempickr = new Pickr({
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
    },

        onChange(hsva) {
        	var vals = document.getElementsByClassName('val');
			if(vals)
			{
				for(var i=0 ; i<vals.length ;i++)
				vals[i].style.backgroundColor = hsva.toHEX();
			}
   		}
});

