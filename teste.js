//var trace1 = {
 // x: [1, 2, 3, 4, 5],
 // y: [1, 6, 3, 6, 1],
 // mode: 'markers+text',
  //type: 'scatter',
  //name: 'Team A',
  //text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
  //textposition: 'top center',
  //textfont: {
    //family:  'Raleway, sans-serif'
  //},
  //marker: { size: 12 }
//};

var trace2 = {
  x: [1.5, 2.5, 3.5, 4.5, 5.5],
  y: [4, 1, 7, 1, 4],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Team B',
  text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
  textfont : {
    family:'Poppins',
    
  },
  textposition: 'right center',
  marker: { size: 20 }
};

//var data = [ trace1, trace2 ];
var data = [trace2];

var layout = {
  xaxis: {
    title:{
        text:"Real vs Digital",
        font:{
            size:24
        }
    } ,

    range: [ -8, 8 ],
    showticklabels: false,
  },
  yaxis: {
    range: [-8, 8],
    showticklabels: false,
    title:{
        text:"Engenharia vs Biologia",
        font:{
            size:24,
            font:"Work Sans"
        }
    }
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:{
      text:'Projetos',
      font:{
          font:"Work Sans",
          size:30
        }
    }
};

Plotly.newPlot('myDiv', data, layout);
var myPlot = document.getElementById('myDiv')

myPlot.on('plotly_click', function(data){
    var pts = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+
            data.points[i].y.toPrecision(4) + '\n\n';
    }
    location.href = "https://www.globo.com"
});