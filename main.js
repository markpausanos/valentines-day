const maintheme = document.getElementById("main_theme");

function playMaintheme(){ //plays theme
    maintheme.play();
    maintheme.onended = function(){
        playMaintheme();
    }
}
playMaintheme(maintheme);

function playAudio(x){
    maintheme.play();
    maintheme.onended = function(){
        playMaintheme();
    }
}
playAudio();
function playTransition(){
    document.getElementById("open1").className = 'fadeOpen';
    document.getElementById("open2").className = 'fadeOpen';
    document.getElementById("mona").className = 'fadeMona';
    document.getElementById("mona").style.visibility = "visible";
}
