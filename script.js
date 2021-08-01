document.addEventListener('DOMContentLoaded', function() {
    
    const hex = document.querySelector('#hex');
    const rgb = document.querySelector('#rgb');
    const hsl = document.querySelector('#hsl');

    var active = hex ; 


    hex.addEventListener('click',function(){
        changeToActive(hex);
    });

    rgb.addEventListener('click',function(){
        changeToActive(rgb);
    });

    hsl.addEventListener('click',function(){
        changeToActive(hsl); 
    });

    
    function changeToActive (newActive){
        active.classList.remove('activated')
        active = newActive;
        active.classList.add('activated');
    }

    const button = document.querySelector('#color-btn');
    const background = document.querySelector('.main-content');
    const text = document.querySelector('#current-color');

    function checkTypeColor(){

        switch(active){
            case hex:
                generateHexColor();
                break;
            case rgb:
                generateRgbColor();
                break;
            case hsl:
                generateHslColor();
                break;      

        }
    }

    function generateHexColor(){
        let randomColor = "#";
        const hexNumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        
        for(let i = 0 ; i<6 ; i++){
            let randomIndex = Math.floor(Math.random() * 16);
            randomColor = randomColor.concat(hexNumbers[randomIndex]);
        }
        setColor(randomColor);
    }

    function generateRgbColor(){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        let RGB = `RGB(${red},${green},${blue})`;
        
        setColor(RGB);
    }

    function generateHslColor(){
        let hue = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 100);
        let lightness = Math.floor(Math.random() * 100);

        let hsl = `HSL(${hue},${saturation}%,${lightness}%)`;
        
        setColor(hsl);
    }


    function setColor(generatedColor){
        text.innerHTML=generatedColor;
        text.style.color=generatedColor;
        background.style.backgroundColor=generatedColor;
    }


    button.addEventListener("click",checkTypeColor);

}, false);





