console.log("ml5 version : " + ml5.version);

Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality: 90
});

cam = document.getElementById("liveWebcamDisplay");
Webcam.attach(cam);

function checkGesture(){
    Webcam.snap(function(data_uri){
        document.getElementById("capture_container").innerHTML='<img id="pic" style="height:100%; width:100%;" src="'+data_uri+'"/>';
        classifier = ml5.Classifier("https://teachablemachine.withgoogle.com/models/ect9VItid/mosel.json/", modelReady);
    });
}