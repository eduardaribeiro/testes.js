const TurnOn = document.getElementById('turnOn');
const TurnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){
    if (!isLampBroken()){
        lamp.src = 'img/ligada.jpg';
    
    }
    
}

function lampOff(){
    if (!isLampBroken()){
    lamp.src = 'img/desligada.jpg';
}
}

function lampbroken(){
    lamp.src = 'img/quebrada.jpg';
}

TurnOn.addEventListener('click', lampOn );
TurnOff.addEventListener('click', lampOff );
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dbclick', lampbroken);