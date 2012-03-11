//opacity detection code.  IE uses a different method
var useOpacity = 
    (typeof document.createElement("div").style.opacity !== 'undefined');
var useFilter = 
    !useOpacity && (typeof document.createElement("div").style.filter !== 'undefined');
function update_opacities(){      
    for(var i=0;i<this.elements.length;i++){	
        if(useOpacity){
            this.elements[i].style.opacity = this.fade_opacity/100;
        }else if (useFilter){
            this.elements[i].style.filter = "alpha(opacity=" + this.fade_opacity + ")";
        }
    }       
}  

function fader(elements, startopacity){
    this.fade_opacity = (typeof startopacity !== 'undefined') ? startopacity : 100;
    this.elements = elements;
    this.popto = popto;
    this.fadeto = fadeto;
    this.updating;
    this.update_opacities = update_opacities;
    this.update_opacities();
}

function popto(val){
    clearTimeout(this.updating);
    this.fade_opacity = val;
    this.update_opacities(); 
}
 
function update(element, stop, step, delay, done){
    if (element.fade_opacity !== stop){
	element.updating = setTimeout(function(){update(element, stop, step, delay, done)}, delay);
	if (Math.abs(element.fade_opacity - stop) < step){
	    element.fade_opacity = stop;
	}else{
	    element.fade_opacity += element.fade_opacity > stop ? -step : step;
	}
	element.update_opacities();	
    }else{
	if (typeof done !== 'undefined'){
	    done();
	}
    }
}    

function fadeto(stop, step, delay, done){
    step = (typeof step !== 'undefined') ? step : 1;
    delay = (typeof delay !== 'undefined') ? delay : 33;
    clearTimeout(this.updating);
    update(this, stop, step, delay, done);
}

function get_fadeelements(){
    var elements = document.getElementsByTagName("*");
    var fadeelements = [];
    for (var i=0;i<elements.length;i++){
        if(elements[i].className.indexOf("fade") !== -1){
            fadeelements.push(elements[i]);
        }
    }    
    return fadeelements;
}