
var trace3 = {
  x: data2["q3"]["x"],
  y: data2["q3"]["y"],
  mode: 'markers',
  type: 'scatter',
  name: 'Digital - Engenharia',
  text: data2["q3"]["text"][1],
  textfont : {
    family:'Poppins',
    color:"gray",
    size:12
  },
  textposition: 'right center',
  hoverinfo:"text",
  marker: { size: data2["q3"]["size"],
            line:{
              width:0.5,
              color:"rgb(80,156,199)",
            },
            color:'rgba(80, 156, 199, 0.5)'

           }
};

var trace2 = {
  x: data2["q2"]["x"],
  y: data2["q2"]["y"],
  mode: 'markers',
  type: 'scatter',
  name: 'Digital - Biologia',
  hoverinfo:"text",
  text: data2["q2"]["text"][1],
  textfont : {
    family:'Poppins',
    color:"#93D94E",
    size:12
  },
  textposition: 'right center',
  marker: { size:  data2["q2"]["size"],
            line:{
              width:0.5,
              color:"rgb(147,217,78)",
            },
            color:'rgba(147, 217, 78, 0.5)'

           }
};
var trace1 = {
  x: data2["q1"]["x"],
  y: data2["q1"]["y"],
  hoverinfo:"text",
  mode: 'markers',
  type: 'scatter',
  name: 'Real - Biologia',
  text: data2["q1"]["text"][1],
  textfont : {
    family:'Poppins',
    color:"rgba(103, 192, 173)",
    size:12
  },
  textposition: 'right center',
  marker: { size:  data2["q1"]["size"],
            line:{
              width:0.5,
              color:"rgba(103, 192, 173)",
            },
            color:'rgba(103, 192, 173, 0.5)'
           }
};
var trace4 = {
  x: data2["q4"]["x"],
  y: data2["q4"]["y"],
  hoverinfo:"text",
  mode: 'markers',
  type: 'scatter',
  name: 'Team B',
  text: data2["q4"]["text"][1],
  textfont : {
    family:'Poppins',
    color:"#F2DC6B",
    size:12
  },
  textposition: 'right center',
  marker: { size:  data2["q4"]["size"],
            line:{
              width:0.5,
              color:"rgb(217,165,80)",
            },
            color:'rgba(217, 165, 80, 0.5)'

           }
};

var data = [trace1, trace2,trace3,trace4];

var layout = {
  xaxis: {
    showgrid: false,
    zerolinecolor: '#636363',
    zerolinewidth: 2,
    title:{
       // text:"Real vs Digital",
        font:{
            size:24
        }
    } ,
    range: [ -11, 11 ],
    showticklabels: false,
  },
  yaxis: {
    range: [-11, 11.25],
    showticklabels: false,
    zerolinecolor: '#636363',
    zerolinewidth: 2,
    showgrid: false,
    title:{
        //text:"Engenharia vs Biologia",
        font:{
            size:24,
            font:"Work Sans"
        }
    }
  },
  hovermode:'closest',
  showlegend: false,
  title:{
      text:'Projetos',
      font:{
          font:"Work Sans",
          size:30
        }
    },
    hoverlabel:{
      bgcolor:"white",
      font_size:1,
      font_family:"Rockwell"
    },
    annotations: [

      {
        x:0,
        y:-11,
        xref: 'x',
        yref: 'y',
        text: 'ENGENHARIA',
        font: {
          family: 'Poppins',
          size: 20,
          color: 'rgb(128,128,128)'
        },
        ax: 2,
        ay: 5,
        //bordercolor: '#c7c7c7',
        //borderwidth: 2,
        //borderpad: 4,
        bgcolor: 'white',
        opacity: 1
      },
      {
        x:0,
        y:11,
        xref: 'x',
        yref: 'y',
        text: 'BIOLOGIA',
        font: {
          family: 'Poppins',
          size: 20,
          color: 'rgb(128,128,128)'
        },
        ax: 2,
        ay: 5,
        //bordercolor: '#c7c7c7',
        //borderwidth: 2,
        //borderpad: 4,
        bgcolor: 'white',
        opacity: 1
      },
      {
        x:10,
        y:-0.25,
        xref: 'x',
        yref: 'y',
        text: 'DIGITAL',
        font: {
          family: 'Poppins',
          size: 20,
          color: 'rgb(128,128,128)'
        },
        ax: 2,
        ay: 5,
        //bordercolor: '#c7c7c7',
       // borderwidth: 2,
        //borderpad: 4,
        //bgcolor: '#2DB56A',
        opacity: 1
      },
      {
        x:-10,
        y:-0.25,
        xref: 'x',
        yref: 'y',
        text: ' REAL ',
        font: {
          family: 'Poppins',
          size: 20,
          color: 'rgb(128,128,128)'
        },
        ax: 2,
        ay: 5,
        //bordercolor: '#c7c7c7',
        //borderwidth: 2,
        //borderpad: 4,
        //bgcolor: '',
        opacity: 1
      }
    ]

};

Plotly.newPlot('myDiv', data, layout);
var myPlot = document.getElementById('myDiv')

myPlot.on('plotly_click', function(data1){
    var pts = '';
    for(var i=0; i < data1.points.length; i++){
      
        if(data1.points[i].x <0 && data1.points[i].y >0){
          quadrante ='q1'
        }
        else if(data1.points[i].x >0 && data1.points[i].y >0){
          quadrante ='q2'
        }
        else if(data1.points[i].x <0 && data1.points[i].y <0){
          quadrante ='q3'
        }
        else{
          quadrante ='q4'
        }
        console.log(quadrante)
        var ponto = i 
        x=data1.points[i].x
        y=data1.points[i].y
    }
    //console.log(x)
    //console.log(data2[quadrante]["x"])
    index=[]
    for ([valor,elemento] of data2[quadrante]["x"].entries()){
      if(elemento==x){
        index.push(valor)
      }
    }
    //console.log(index)
    final = 100000
    for (valor1 of index){
      if(data2[quadrante]["y"][valor1]==y){
        final = valor1
      }
    }
    //console.log(final)
    //console.log(data2[quadrante]["text"][1][final])
    window.open(
      data2[quadrante]["text"][0][final],
      '_blank' // <- This is what makes it open in a new window.
    );
    //location.href = data2[quadrante]["text"][1][final]
});