function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EnJ32uf21/model.json", modelReady);
    }
    
    function modelReady(){
    classifier.classify(gotResults);
    }
    
    function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I can hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy: '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    
    img=document.getElementById('dog');
    img1=document.getElementById('cat');
    img2=document.getElementById('monkey');
    img3=document.getElementById('dinosaur');

    if(results[0].label == "Barking"){
        img.src='dog.gif';
        img1.src='cat.png';
        img2.src='monkey.png';
        img3.src='dinosaur.png';
    }
    else if(results[0].label == "Meowing"){
        img.src='dog.png';
        img1.src='cat.gif';
        img2.src='monkey.png';
        img3.src='dinosaur.png';
    }
    else if(results[0].label == "Monkey"){
        img.src='dog.png';
        img1.src='cat.png';
        img2.src='monkey.gif';
        img3.src='dinosaur.png';
    }
    else if(results[0].label == "Dinosaur"){
        img.src='dog.png';
        img1.src='cat.png';
        img2.src='monkey.png';
        img3.src='dinosaur.gif';
    }

}
}
