https://teachablemachine.withgoogle.com/models/x0ILziNmG/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("webcam");

Webcam.attach("#webcam");

function take_snapshot()
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("webcam_output").innerHTML="<img id='img' src='"+data_uri+"'>";
    })
}
console.log("ml5 version=", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x0ILziNmG/model.json", model_loaded);

function model_loaded()
{
    console.log("model loaded works :D");
}