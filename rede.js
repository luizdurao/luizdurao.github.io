const height=.87*window.screen.availHeight,width=window.screen.availWidth;console.log(window.screen.width);var svg=d3.select("#vis").append("svg").attr("width","100%").attr("height","100%"),color=d3.scaleOrdinal(d3.schemeCategory20);const w=width/2,h=height/2;var simulation=d3.forceSimulation().force("link",d3.forceLink().id(function(t){return t.id})).force("charge",d3.forceManyBody().strength(-900)).force("center",d3.forceRadial().strength(.5).radius(1).x(w).y(h-20)),opcao="Total";function dragstarted(t){d3.event.active||simulation.alphaTarget(.3).restart(),t.fx=t.x,t.fy=t.y}function dragged(t){t.fx=d3.event.x,t.fy=d3.event.y}function dragended(t){d3.event.active||simulation.alphaTarget(0),t.fx=null,t.fy=null}$("#pegar").click(function(){var t=$("#member :checked").val();console.log(t)}),d3.json("https://raw.githubusercontent.com/luizdurao/luizdurao.github.io/master/hca-brazil2.json",function(t,e){if(t)throw t;const n="0.3",i=25,r=80,s=e.links;let o=e.nodes;$("#pegar").click(function(){var t=$("#member :checked").val();console.log(t),null===t&&(t="Total");var n=[];o.forEach(e=>{console.log(e.name),"Total"==t?n.push(e.id):(e.status==t||[86,87,88,89,90,91,92,93,94,95,96,97,98,99,100].includes(e.id))&&n.push(e.id)}),console.log(n),svg.selectAll("image").filter(function(t){""!=n?n.includes(t.id)?this.style.display="":this.style.display="none":this.style.opacity="1"}),svg.selectAll("circle").filter(function(t){""!=n?n.includes(t.id)?this.style.display="":this.style.display="none":this.style.opacity="1"}),svg.selectAll("line").data(e.links).attr("class",function(t){if(""!=n)return n.includes(t.source.id||t.target.id)?"nada":"vazio";this.style.opacity="1"})});var l=svg.append("g").attr("class","links").selectAll("line").data(e.links).enter().append("line").attr("stroke-width",function(t){let e;return"value"in t?e=t.value:t=1,Math.sqrt(e)}),a=svg.append("g").attr("class","nodes").selectAll("g").data(e.nodes).enter().append("g"),c=(a.append("circle").attr("r",function(t){return"NA"!=t.link?(i+parseFloat("2"))/2:(2*i+parseFloat("2"))/2}).style("fill",function(t){return console.log(status),t.status,t.color}).style("stroke",function(t){return t.color}).style("stroke-width","2px"),a.append("svg:image").attr("xlink:href",function(t){return"https://ensinoai.com/csbl/fotos/"+t.photo}).attr("x",function(t){return"NA"!=t.link?-i/2:2*-i/2}).attr("y",function(t){return"NA"!=t.link?-i/2:2*-i/2}).attr("height",function(t){return"NA"!=t.link?i:2*i}).attr("width",function(t){return"NA"!=t.link?i:2*i}).attr("class","image-border").call(d3.drag().on("start",dragstarted).on("drag",dragged).on("end",dragended)));function u(t,e){d3.select(t).transition().attr("x",function(t){return-e/2}).attr("y",function(t){return-e/2}).attr("height",e).attr("width",e)}function d(t){var e=t.id,i=[];s.forEach(t=>{t.source.id===e?i.push(t.target.id):t.target.id===e&&i.push(t.source.id)}),i.push(e),svg.selectAll("image").filter(function(t){i.includes(t.id)?(u(this,r),this.style.opacity="1"):this.style.opacity=n}),svg.selectAll("circle").filter(function(t){i.includes(t.id)?(u(this,r),this.style.opacity="1"):this.style.opacity=n})}function f(t){svg.selectAll("image").filter(function(t){u(this,i),this.style.opacity="1"}),svg.selectAll("circle").filter(function(t){u(this,i),this.style.opacity="1"})}c.on("mouseenter",function(t){d(t),u(this,70)}),c.on("mouseleave",function(t){f(),u(this,i)}),c.on("click",function(t){"NA"!=t.link&&(window.open(t.link,"_blank"),window.focus())});var h=a.append("text").text(function(t){if("NA"==t.link)return t.name}).attr("x",-2*i).attr("y",3).style("font-size","10px").style("font-weight","bold").style("text-align","center");h.on("mouseenter",d),h.on("mouseleave",f),a.append("title").text(function(t){return t.name}),simulation.nodes(e.nodes).on("tick",function(){l.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}),a.attr("transform",function(t){return"translate("+t.x+","+t.y+")"})}),simulation.force("link").links(e.links)});