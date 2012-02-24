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

function fader(elements, step, startopacity, delay){
    this.fade_opacity = (typeof startopacity !== 'undefined') ? startopacity : 100;
    this.step = (typeof step !== 'undefined') ? step : 1;
    this.delay = (typeof delay !== 'undefined') ? delay : 33;
    this.elements = elements;
    this.popto = popto;
    this.fadeto = fadeto;
    this.update = update;
    this.updating;
    this.update_opacities = update_opacities;
    this.update_opacities();
}

function popto(val){
    clearTimeout(this.updating);
    this.fade_opacity = val;
    this.update_opacities(); 
}
 
function update(stop, done){
    if (this.fade_opacity !== stop){
	this.updating = setTimeout(function(thisObj){thisObj.update(stop, done)}, this.delay, this);
	if (Math.abs(this.fade_opacity - stop) < this.step){
	    this.fade_opacity = stop;
	}else{
	    this.fade_opacity += this.fade_opacity > stop ? -this.step : this.step;
	}
	this.update_opacities();	
    }else{
	if (typeof done !== 'undefined'){
	    done();
	}
    }
}    

function fadeto(stop, done){
    clearTimeout(this.updating);
    this.update(stop, done);
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