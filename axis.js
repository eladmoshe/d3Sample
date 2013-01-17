$(window).ready(function() {

  (function createChart() {
    var dataset = [
      {
        name:"t1",
        change:25
      },
      {
        name:"t2",
        change:-30
      },
      {
        name:"t3",
        change:32
      },
      {
        name:"t4",
        change:-12
      },
      {
        name:"t5",
        change:-3
      },
      {
        name:"t6",
        change:0
      },
      {
        name:"t7",
        change:-35
      },
      {
        name:"t8",
        change:40
      }
    ];

    var width = 500;
    var height = 250;
    var svg = d3
        .select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
      ;

    var scale = d3.scale.linear()
        .domain
        (
          [
            d3.max(dataset, function(d) {
              return d.change;
            }),
            d3.min(dataset, function(d) {
              return d.change;
            })
          ]
        )
        .range(["red", "white", "green"])
      ;

    svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("r", function(d) {
        return 20;
      })
      .attr("stroke", 2)
      .attr("fill", function(d) {
        console.log(scale(d));
        return scale(d);
      })
      .attr("cx", function(d,i){
        return ((width-40)/dataset.length)*i+20;
      })
      .attr("cy",function(d,i){
        return height/2;
      })
    ;

  }())

});