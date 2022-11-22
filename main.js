
function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CGkeMHgyJ/model.json",model_ready)
}
function model_ready(){
classifier.classify(gotResults)
}
function gotResults(error,results){
console.log("gotResult")
}