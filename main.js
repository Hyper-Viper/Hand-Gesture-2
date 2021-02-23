camera = document.getElementById("camera");
img = document.getElementById("img");
capt = document.getElementById("capt");
switch_check = document.getElementById("switch");
victory = document.getElementById("victory");
thumbs_up = document.getElementById("thumbs_up");
amazing = document.getElementById("amazing");
v = document.getElementById("v");
t = document.getElementById("t");
a = document.getElementById("a");
var freezed = false;

function switchonoff(){
    if (switch_check.checked){
        camera.style.paddingTop = "";
        degrayscale();
        img.style.marginTop = "";
        Webcam.set({
          width:340,
          height:255,
          image_format:'png',
          png_quality:90
        });
        Webcam.unfreeze();
        freezed = false;
    }
    else{
        camera.style.paddingTop = "18px";
        grayscale();
        img.style.marginTop = "-18px";
        Webcam.set({
          width:340,
          height:255,
          image_format:'png',
          png_quality:90
        });
        Webcam.freeze();
        capt.style.cursor = "not-allowed";
        freezed = true;
    }
}

console.log("ml5 version: " + ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j3VQn3830/model.json',modelLoaded);

function modelLoaded(){
  console.log('Model loaded!');
}

function capture(){
  if (freezed == false){
    Webcam.snap(function(data_uri){
      img.src = data_uri;
    });
  }
}

Webcam.set({
  width:340,
  height:290,
  image_format:'png',
  png_quality:90,
  flip_horiz:true
});

Webcam.attach(camera);

setTimeout(function() {
  switchonoff();
}, 150);

function grayscale(){
    camera.style.animation = "grayscale 0.5s";
    setTimeout(function (){
      camera.style.filter = "grayscale(90%)";
    }, 300);
}

function degrayscale(){
    camera.style.animation = "degrayscale 0.5s";
    setTimeout(function (){
      camera.style.filter = "grayscale(0%)";
    }, 300);
}

document.addEventListener('contextmenu', event => event.preventDefault());
