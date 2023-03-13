const Firesound = document.getElementById('fire')
const controls = document.getElementById('ctrlIcon')
// rain
const rainSound = document.getElementById('rain')
const rainControl = document.getElementById('ctrlIconRain')

// forest
const forestSound = document.getElementById('forest')
const forestControl = document.getElementById('ctrlIconForest')


function playPause(){
    if(controls.classList.contains('fire-playing')){
       Firesound.pause();
     ctrlIcon.classList.remove('fire-playing')
    }
    else{
    
    
     Firesound.play();
     ctrlIcon.classList.toggle('fire-playing')
     
        
    }
}


// rain
function playPauseRain(){
    if(rainControl.classList.contains('rain-playing')){
        rainSound.pause();
        rainControl.classList.remove('rain-playing')
     }
     else{
    rainSound.play();
      rainControl.classList.toggle('rain-playing')     
     }
}

// forest
function playPauseForest(){
    if(forestControl.classList.contains('forest-playing')){
        forestSound.pause();
        forestControl.classList.remove('forest-playing')
     }
     else{
        forestSound.play();
        forestControl.classList.toggle('forest-playing')     
     }
}