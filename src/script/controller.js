import '../style/pickr.min.css';
import Pickr from '../script/pickr.min.js';
console.log("loaded Picker");

var bgpickr = new Pickr({
    el: '.bg-picker',
    default: '#abd4ad',
    showAlways: true,

    components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            cmyk: true,
            input: true,
            save:true,
        },
	},
        onChange(hsva) {
			var bg = document.getElementById('background')
			bg.style.backgroundColor = hsva.toHEX();

            var bgbutton = document.getElementsByClassName('pcr-button')
            bgbutton[1].style.backgroundColor = hsva.toHEX();
   		},

   		onSave(hsva){
   			console.log(hsva);
   		}
    
});


var itempickr = new Pickr({
    el: '.item-picker',
    default: '#42445A',
    showAlways: true,


    components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true, 
            cmyk: true,           
            input: true,
            save: true,
        },
    },

        onChange(hsva) {
        	var vals = document.getElementsByClassName('val');
			if(vals)
			{
				for(var i=0 ; i<vals.length ;i++)
				vals[i].style.backgroundColor = hsva.toHEX();
			}
            var bgbutton = document.getElementsByClassName('pcr-button')
            bgbutton[0].style.backgroundColor = hsva.toHEX();
   		}
});
