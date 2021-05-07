const height = 0.87*window.screen.availHeight;
const width =window.screen.availWidth;
console.log(window.screen.width)

var svg = d3
.select("#vis")
.append("svg")
.attr("width", "100%")
.attr("height", "100%");

var color = d3.scaleOrdinal(d3.schemeCategory20);

const w = width / 2;
const h = height / 2;

var simulation = d3
.forceSimulation()
.force(
    "link",
    d3.forceLink().id(function(d) {
        return d.id;
    })
)
.force("charge", d3.forceManyBody().strength(-900))
.force(
    "center",
    d3
        .forceRadial()
        .strength(0.5)
        .radius(1)
        .x(w)
        .y(h - 20)
);

var opcao = "Total"

$("#pegar").click(function(){ 
    var opcao = $('#member :checked').val()
    console.log(opcao)    
});



d3.json(
"https://raw.githubusercontent.com/luizdurao/luizdurao.github.io/master/hca-brazil2.json",
function(error, graph) {
    if (error) throw error;
 
    const opacity = "0.3";
    const strokeWidth = "2";

    const imgSize = 25;
    const imgSizeGroup = 80;
    const imgSizeBig = 70;
    const multFactorNodes = 2;

    const links = graph.links;

    const emptyOption = "";

    let data = graph.nodes;
    // data.unshift({ id: emptyOption });

    var opcao = "Total"

    $("#pegar").click(function() {
        var opcao = $('#member :checked').val()
        console.log(opcao) 
        
        if (opcao === null){
            opcao = "Total"
        }

        var found = [];

        data.forEach(element => {
            console.log(element.name);
            if (opcao == "Total"){
                found.push(element.id);
            }
            else if (element.status == opcao || [86,87,88,89,90,91,92,93,94,95,96,97,98,99,100].includes(element.id)) {
                found.push(element.id);
            } 
        });

        console.log(found);

        svg.selectAll("image").filter(function(d) {
            if (found != emptyOption) {
                if (found.includes(d.id)) {
                    this.style.display = "";
                } else {
                    this.style.display = "none";
                }
            } else {
                this.style.opacity = "1";
            }
        });

        svg.selectAll("circle").filter(function(d) {
            if (found != emptyOption) {
                if (found.includes(d.id)) {
                    this.style.display = "";
                } else {
                    this.style.display = "none";
                }
            } else {
                this.style.opacity = "1";
            }
        });

      svg.selectAll("line")
        .data(graph.links)
        .attr("class",function(d) {
            if (found != emptyOption) {
                if (found.includes(d.source.id|| d.target.id)) {
                    return "nada";
                } else {
                    return "vazio";
                }
            } else {
                this.style.opacity = "1";
            }
        });

    });

    var link = svg
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter()
        .append("line")
        .attr("stroke-width", function(d) {
            let value;
            "value" in d ? (value = d.value) : (d = 1);
            return Math.sqrt(value);
        });

    var node = svg
        .append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(graph.nodes)
        .enter()
        .append("g");


    var imgBorder = node
        .append("circle")
        .attr("r", function(d) {
            if (d.link != "NA") {
                return (imgSize + parseFloat(strokeWidth)) / 2;
            } else {
                return (
                    (imgSize * multFactorNodes + parseFloat(strokeWidth)) /
                    2
                );
            }
        })
        // .attr("r", (imageSize + 1) / 2)
        .style("fill", function(d) {
            console.log(status)
            if (d.status==opcao || opcao=='Total'){
            return d.color;
            } else{ return "#808080" }
        })
        .style("stroke", function(d) {
            return d.color;
        })
        .style("stroke-width", strokeWidth + "px");



    var images = node
        .append("svg:image")
        .attr("xlink:href", function(d) {
            return (
                "https://ensinoai.com/csbl/fotos/" +
                d.photo
            );
        })
        .attr("x", function(d) {
            if (d.link != "NA") {
                return -imgSize / 2;
            } else {
                return (-imgSize * multFactorNodes) / 2;
            }
        })
        .attr("y", function(d) {
            if (d.link != "NA") {
                return -imgSize / 2;
            } else {
                return (-imgSize * multFactorNodes) / 2;
            }
        })
        .attr("height", function(d) {
            if (d.link != "NA") {
                return imgSize;
            } else {
                return imgSize * multFactorNodes;
            }
        })
        .attr("width", function(d) {
            if (d.link != "NA") {
                return imgSize;
            } else {
                return imgSize * multFactorNodes;
            }
        })
        .attr("class", "image-border")
        .call(
            d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
        );

    function changeSize(el, elsize) {
        d3.select(el)
            .transition()
            .attr("x", function(d) {
                return -elsize / 2;
            })
            .attr("y", function(d) {
                return -elsize / 2;
            })
            .attr("height", elsize)
            .attr("width", elsize);
    }

    function onMouseEnter(d) {
        //reduce opacity from nodes not connected to the selected node
        var selected = d.id;

        var found = [];

        links.forEach(element => {
            if (element.source.id === selected) {
                found.push(element.target.id);
            } else if (element.target.id === selected) {
                found.push(element.source.id);
            }
        });

        found.push(selected);

        svg.selectAll("image").filter(function(d) {
            if (found.includes(d.id)) {
                changeSize(this, imgSizeGroup);

                this.style.opacity = "1";
            } else {
                this.style.opacity = opacity;
            }
        });

        svg.selectAll("circle").filter(function(d) {
            if (found.includes(d.id)) {
                changeSize(this, imgSizeGroup);
                this.style.opacity = "1";
            } else {
                this.style.opacity = opacity;
            }
        });
    }

    function onMouseLeave(d) {
        svg.selectAll("image").filter(function(d) {
            changeSize(this, imgSize);
            this.style.opacity = "1";
        });
        svg.selectAll("circle").filter(function(d) {
            changeSize(this, imgSize);
            this.style.opacity = "1";
        });
    }

    images.on("mouseenter", function(d) {
        onMouseEnter(d);

        //increase image size
        changeSize(this, imgSizeBig);
    });

    images.on("mouseleave", function(d) {
        onMouseLeave(d);

        //decrease image size
        changeSize(this, imgSize);
    });

    images.on("click", function(d) {
        if (d.link != "NA") {
            window.open(d.link, "_blank");
            window.focus();
        }
    });

    

    var labels = node
        .append("text")
        .text(function(d) {
            if (d.link == "NA") {
                return d.name;
            }
        })
        .attr("x", -(imgSize * multFactorNodes))
        .attr("y", 3)
        .style("font-size", "10px")
        .style("font-weight", "bold")
        .style("text-align", "center");

    labels.on("mouseenter", onMouseEnter);

    labels.on("mouseleave", onMouseLeave);

    node.append("title").text(function(d) {
        return d.name;
    });

    simulation.nodes(graph.nodes).on("tick", ticked);

    simulation.force("link").links(graph.links);

    function ticked() {
        link.attr("x1", function(d) {
            return d.source.x;
        })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            });

        node.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
    }
}
);

function dragstarted(d) {
if (!d3.event.active) simulation.alphaTarget(0.3).restart();
d.fx = d.x;
d.fy = d.y;
}

function dragged(d) {
d.fx = d3.event.x;
d.fy = d3.event.y;
}

function dragended(d) {
if (!d3.event.active) simulation.alphaTarget(0);
d.fx = null;
d.fy = null;
}