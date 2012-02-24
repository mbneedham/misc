//opacity detection code.  IE uses a different method
var useOpacity = 
    (typeof document.createElement("div").style.opacity != 'undefined');
var useFilter = 
    !useOpacity && (typeof document.createElement("div").style.filter != 'undefined');
function update_opacities(elements, opacity){      
    for(var i=0;i<elements.length;i++){
        if(useOpacity){
            elements[i].style.opacity = opacity/100;
        }else if (useFilter){
            elements[i].style.filter = "alpha(opacity=" + opacity + ")";
        }
    }       
}  

function fader(elements){
    this.fade_opacity = 100;
    this.elements = elements;
    this.fadein = fadein;
    this.fadeout = fadeout;
    this.fading;
}

function fadein(){
    clearTimeout(this.fading);
    this.fade_opacity = 100;
    update_opacities(this.elements, this.fade_opacity); 
}
 
function fadeout(){
    if (this.fade_opacity > 0){
        this.fade_opacity -= 1; 
        this.fading = setTimeout(function(thisObj){thisObj.fadeout()}, 33, this);
        update_opacities(this.elements, this.fade_opacity);        
    }
}


function get_fadeelements(){
    var elements = document.getElementsByTagName("*");
    var fadeelements = [];
    for (var i=0;i<elements.length;i++){
        if(elements[i].className.indexOf("fade") != -1){
            fadeelements.push(elements[i]);
        }
    }    
    return fadeelements;
}