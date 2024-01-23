// // // Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
// // let classifier;
// // let inputElement;
// // let userImage;
// // // A variable to hold the image we want to classify
// // let img;
// // function preload() {
// //   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-O7qiAfUz/' + 'model.json');
// //   img = loadImage(handleFile);
// // }


// // function setup() {
// //   createCanvas(400, 400);

// //   inputElement = createFileInput(handleFile);
// //   inputElement.position(0, 0);


// //   classifier.classify(img, gotResult);
// //   image(img, 0, 0);
// // }
// // // A function to run when we get any errors and the results
// // function gotResult(error, results) {
// //   // Display error in the console
// //   if (error) {
// //     console.error(error);
// //   } else {
// //     // The results are in an array ordered by confidence.
// //     console.log(results);
// //     createDiv(`Label: ${results[0].label}`);
// //     createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
// //   }
// // }

// // function handleFile(file) {
// //   print(file);

// //   if (file.type === 'image') {
// //     userImage = createImg(file.data, '');
// //     //userImage.hide();
// //   } else {
// //     userImage = null;
// //   }
// // }

// // Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
// let classifier;
// // A variable to hold the image we want to classify
// let img;
// function preload() {
//   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-O7qiAfUz/' + 'model.json');
//   img = loadImage('assets/img/tul.jfif');
// }
// function setup() {
//   createCanvas(400, 400);
//   classifier.classify(img, gotResult);
//   image(img, 0, 0);
// }
// // A function to run when we get any errors and the results
// function gotResult(error, results) {
//   // Display error in the console
//   if (error) {
//     console.error(error);
//   } else {
//     // The results are in an array ordered by confidence.
//     console.log(results);
//     createDiv(`Label: ${results[0].label}`);
//     createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
//   }
// }

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-O7qiAfUz/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

var title;
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();

  title = createElement('h3', 'How to use our scanner.');
  createElement('li', 'Turn on your camera on your devices.');
  createElement('li','Wait for our scanner to on.');
  createElement('li', 'Put up any picture of flower that we just shows on our homepage on your phone and show it to the camera.');
  createElement('li', 'Wait for our system to detect.');
  createElement('li', 'A label that contain the flower\'s name will appear on the screen.'); 
}

function instruction() {
  let div = createDiv('').size(10, 10);
  div.style('background-color', '#C5D8A4');
  
  div.center();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}