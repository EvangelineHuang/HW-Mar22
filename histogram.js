var w=600;
var h=400;
var hw=d3.csv("homework.csv");
var margin={
  left:25,
  right:220,
  top:25,
  bottom:25
}
var padding=10;
var padding2=30;
hw.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,d3.max(data,function(d){return parseInt(d.day,10)})])
               .range([margin.left,w]);
  var yScale=d3.scaleLinear()
               .domain([0,50])
               .range([h,margin.top]);
  var line=d3.line()
             .x(function(d){return xScale(parseInt(d.day,10));})
             .y(function(d){return yScale(parseInt(d.grade,10));})
  var svg=d3.select("#homework")
             .attr("width",w+margin.left+margin.right)
             .attr("height",h+margin.top+margin.bottom);
  svg.append("path")
      .datum(data)
      .classed("line",true)
      .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate(0,"+(h+margin.top)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+margin.left+","+margin.top+")");
},function(err){
  console.log(err);
});
/////////////////////////////////////////////
var quizz=d3.csv("quizz.csv");
quizz.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,d3.max(data,function(d){return parseInt(d.day,10)})])
               .range([margin.left,w]);
  var yScale=d3.scaleLinear()
               .domain([0,10])
               .range([h,margin.top]);
  var line=d3.line()
             .x(function(d){return xScale(parseInt(d.day,10));})
             .y(function(d){return yScale(parseInt(d.grade,10));})
  var svg=d3.select("#quizz")
             .attr("width",w+margin.left+margin.right)
             .attr("height",h+margin.top+margin.bottom);
  svg.append("path")
      .datum(data)
      .classed("line",true)
      .attr("d",line);
  var xAxis=d3.axisBottom(xScale);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate(0,"+(h+margin.top)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+margin.left+","+margin.top+")");
},function(err){
  console.log(err);
});
/////////////////////////////////////////////
var test=d3.csv("test.csv");
test.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,2])
               .range([margin.left,w]);
  var yScale=d3.scaleLinear()
               .domain([0,100])
               .range([h,margin.top]);
  var xScale2=d3.scaleLinear()
                .domain([1,3])
                .range([margin.left,w]);
  var line=d3.line()
             .x(function(d,i){return xScale(i);})
             .y(function(d){return yScale(parseInt(d.grade,10));})
  var svg=d3.select("#test")
             .attr("width",w+margin.left+margin.right)
             .attr("height",h+margin.top+margin.bottom);
  svg.append("path")
      .datum(data)
      .classed("line",true)
      .attr("d",line);
  var xAxis=d3.axisBottom(xScale2)
              .tickValues([1,2,3]);
  var yAxis=d3.axisLeft(yScale);
  svg.append("g")
     .classed("xAxis",true)
     .call(xAxis)
     .attr("transform","translate(0,"+(h+margin.top)+")");
  svg.append("g")
     .classed("yAxis",true)
     .call(yAxis)
     .attr("transform","translate("+margin.left+","+margin.top+")");
},function(err){
  console.log(err);
});
/////////////////////////////////////////////////
var hwf=d3.csv("HWFrequency.csv");
hwf.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,7])
               .range([margin.left,w]);
  var yScale=d3.scaleLinear()
               .domain([0,10])
               .range([h+margin.top,margin.top]);
  var cScale=d3.scaleOrdinal(d3.schemeSet3);
  var svg=d3.select("#HWfrequency")
             .attr("width",w+margin.left+margin.right)
             .attr("height",h+margin.top+margin.bottom);
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x",function(d,i){return xScale(i);})
     .attr("y",function(d){return yScale(d.frequence);})
     .attr("width",w/data.length-padding)
     .attr("height",function(d){return h+margin.top-yScale(d.frequence);})
     .attr("fill",function(d,i){return cScale(i);});
var xAxis=d3.axisBottom(xScale);
var yAxis=d3.axisLeft(yScale);
svg.append("g")
  .classed("xAxis",true)
  .classed("fill",true)
  .call(xAxis)
  .attr("transform","translate(0,"+(h+margin.top)+")");
svg.append("g")
  .classed("yAxis",true)
  .call(yAxis)
  .attr("transform","translate("+margin.left+",0)");
svg.append("g")
   .selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("x",function(d,i){return w+10;})
   .attr("y",function(d,i){return margin.top+i*40;})
   .attr("width",30)
   .attr("height",30)
   .attr("fill",function(d,i){return cScale(i);});
svg.append("g")
   .selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .attr("x",function(d,i){return w+45;})
   .attr("y",function(d,i){return margin.top+20+i*40;})
   .text(function(d,i){
      if(i==0)
      {return "Less than or equal to "+d.grade;}
      else {
      {return "Score: "+d.grade;}
      }
   })
},function(err){console.log(err);})
//////////////////////////////////////
var qzf=d3.csv("QZfrequency.csv");
qzf.then(function(data){
  var xScale=d3.scaleLinear()
               .domain([0,5])
               .range([margin.left,w]);
  var yScale=d3.scaleLinear()
               .domain([0,20])
               .range([h+margin.top,margin.top]);
  var cScale=d3.scaleOrdinal(d3.schemeSet2);
  var svg=d3.select("#QZfrequency")
             .attr("width",w+margin.left+margin.right)
             .attr("height",h+margin.top+margin.bottom);
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x",function(d,i){return xScale(i);})
     .attr("y",function(d){return yScale(d.frequence);})
     .attr("width",w/data.length-padding2)
     .attr("height",function(d){return h+margin.top-yScale(d.frequence);})
     .attr("fill",function(d,i){return cScale(i);});
var xAxis=d3.axisBottom(xScale);
var yAxis=d3.axisLeft(yScale);
svg.append("g")
   .classed("xAxis",true)
   .classed("fill",true)
   .call(xAxis)
   .attr("transform","translate(0,"+(h+margin.top)+")");
svg.append("g")
   .classed("yAxis",true)
   .call(yAxis)
   .attr("transform","translate("+margin.left+",0)");
svg.append("g")
   .selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("x",function(d,i){return w+10;})
   .attr("y",function(d,i){return margin.top+i*40;})
   .attr("width",30)
   .attr("height",30)
   .attr("fill",function(d,i){return cScale(i);});
svg.append("g")
   .selectAll("text")
   .data(data)
   .enter()
   .append("text")
   .attr("x",function(d,i){return w+45;})
   .attr("y",function(d,i){return margin.top+20+i*40;})
   .text(function(d) {return "Score: "+d.grade;});
},function(err){console.log(err);})
