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
    ].sort(function(i) {
        return i.change;
      });

    var width = 500;
    var height = 250;
    var svg = d3
        .select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
      ;

    //chart background
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("stroke", "lightblue")
      .attr("fill", "AliceBlue")
      .attr("stroke-width",2)
    ;

    var scale = d3.scale.linear()
        .domain
        (
          [
            d3.max(dataset, function(d) {
              return d.change;
            }),
            0,
            d3.min(dataset, function(d) {
              return d.change;
            })
          ]
        )
        .range(["white", "red", "maroon"])
      ;
    console.log(scale(0.4), d3.min(dataset, function(d) {
      return d.change;
    }));

    svg
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("r", function() {
        return 20;
      })
      .attr("stroke", 2)
      .attr("fill", function(d) {
        console.log(scale(d));
        return scale(d.change);
      })
      .attr("cx", function(d, i) {
        return ((width) / dataset.length) * i + 27;
      })
      .attr("cy", function() {
        return height / 2;
      })
      .on("mouseover",function(d,i){
        d3.select(this)
          .transition().duration(700)
          .attr("opacity", 0)
          .transition().duration(600)
          .attr("r", 1000)
          .remove()
        ;

      })

    ;

    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function(d) {
        return d.name;
      })
      .attr("x", function(d, i) {
        return ((width) / dataset.length) * i + 22;
      })
      .attr("y", function() {
        return height / 2;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "13px")
      .attr("font-weight", "bold")
      .attr("fill", function(d) {
        return scale.range(["maroon", "black", "white"])(d.change);
      })
    ;

  }())

});