const net = new brain.NeuralNetwork({hiddenLayers: [3]});
const trainingData = [
  { input: [255, 255, 255], output: [1]},
  { input: [0, 0, 0], output: [0]},
  { input: [198, 240, 127], output: [1]},
  { input: [1, 1, 255], output: [1]},
  { input: [1, 21,26], output: [0]},
  { input: [131, 246, 58], output: [1]},
  { input: [171, 145, 158], output: [1]},
  { input: [67, 0, 158], output: [1]},
  { input: [211, 13, 58], output: [1]},
  { input: [1, 11, 148], output: [1]},
  { input: [211, 151, 58], output: [1]},
  { input: [171, 161, 158], output: [1]},
  { input: [1, 11, 43], output: [0]},
  { input: [120, 61, 5], output: [0]},
  { input: [93, 39, 16], output: [0]},
  { input: [56, 31, 9], output: [0]},
  { input: [47, 12, 67], output: [0]},
  { input: [22,56, 243], output: [1]},
  { input: [73, 21, 5], output: [1]},
  { input: [23, 88, 3], output: [1]},
  { input: [20, 22, 46], output: [1]},
  { input: [51, 37, 25], output: [0]},
  { input: [12, 5, 35], output: [0]},
  { input: [10, 2, 43], output: [0]},
];

net.train(trainingData);

function clicker(){
 var num = Math.round(0xffffff * Math.random());
 var r = num >> 16;
 var g = num >> 8 & 255;
 var b = num & 255;
  document.body.style.backgroundColor = "rgb("+r+","+b+","+g+")"
 let val = (net.run([r, b, g]));    w
if(val>.5){
    document.getElementById("result").innerHTML = "<p>Probably a LIGHT color</p>";
    document.body.style.color = "black";
}
else if (val <.5) {
    document.getElementById("result").innerHTML = "<p>Probably a DARK color</p>";
    document.body.style.color = "white";
}
    console.log(r,b,g)
}
