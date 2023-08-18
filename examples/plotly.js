const script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://localhost:8000/dist/boostlet.min.js";
// script.src = "https://mpsych.github.io/boostlet/dist/boostlet.min.js";
script.onload = run;
document.head.appendChild(script);
eval(script);

function run() {
  
  // detect visualization framework
  Boostlet.init();

  all_pixels = Boostlet.get_current_image().data;

  // load Plotly.js library and start plotting
  Boostlet.load_script('https://cdn.plot.ly/plotly-2.25.2.min.js', plot);

}

function plot() {

  let trace = {
      x: all_pixels,
      type: 'histogram',
    };

  // create div for plot
  let container = window.document.createElement('div');
  container.id = 'plotlyDiv';
  container.style.position = 'absolute';
  container.style.top = '10px';
  container.style.left = '10px';
  container.style.zIndex = '1000';
  container.onclick = function() {
    // destroy on click
    window.document.body.removeChild(container);
  }
  window.document.body.appendChild(container);

  // plot the data
  Plotly.newPlot('plotlyDiv', [trace]);

}
