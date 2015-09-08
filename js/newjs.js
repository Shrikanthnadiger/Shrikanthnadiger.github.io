function usersummary(id,text,val,typ){

var p=d3.select(id)
  		.append("div")
  		.attr("class","sumdiv")
  		.attr("type",typ)
		.html("<span class='blink'>"+val+"</span><br><span style='font-weight:bold'>"+text);
	d3.select(id)
  	  .append("div")
	  .attr("class","arrow")
	  .attr("id",typ);
}

function setdata(data_val,id){	 

svg = d3.select(id)
		.append("svg")
		.attr("width","100%")
		.attr("height",200);

	svg.selectAll("text")
	   .data(data_val)
	   .enter()
	   .append("text")
	   .attr("x",10)
	   .attr("y",function(d,i){return i*30+10;})
	   .attr("font-size",function(d,i){ return (25-(i*3));})
	   .text(function(d){return d.url;});
	
}

function repeat1(r1){
	
if(r1.attr("cx") < 500){
	r1.transition()
  	.delay(500)
  	.duration(500)
  	.attr("r", 30)
    .attr("cx",function(){ return i*500+1000;});
    
     }else{
    r1.transition()
    .attr("r", 10)
    .attr("cx",50);
    }

}

function line(){

var line=p.append("line")
	.attr("x1",150)
	.attr("y1",150)
	.attr("x2",150)
	.attr("y2",150)
	.attr("stroke","black")
	.attr("stroke-width",3);
	return line;

}

function getX(degrees, r, adjust, x) {

	var x = x || r, 
	adj = adjust || 1;
	return x + r * adj * Math.cos(getRad(degrees));
}

function getY(degrees, r, adjust, y) {

	var y = y || r,
	adj = adjust || 1;
	return y + r * adj * Math.sin(getRad(degrees));
}

function getRad(degrees) {

	var adjust = Math.PI / 2;
	return (degrees * Math.PI / 180) - adjust;

}

function repeat(sline,mline,hline){
	var currentTime = new Date();	
	
	var deg=currentTime.getSeconds()*6;
		x2 = getX(deg, 75, 1, 150),
	    y2 = getY(deg, 75, 1, 150);
	    ax=x2+" "+y2;
	sline.attr("x2",x2)
	    .attr("y2",y2);
	
	deg=currentTime.getMinutes()*6;
	x2 = getX(deg, 75, 0.9, 150),
	y2 = getY(deg, 75, 0.9, 150);
	mline.attr("x2",x2)
	      .attr("y2",y2);
	
	deg=(currentTime.getHours()+(currentTime.getMinutes()/60))*30;
	x2 = getX(deg, 75, 0.5, 150),
	y2 = getY(deg, 75, 0.5, 150);
	hline.attr("x2",x2)
	      .attr("y2",y2);
}

function addtext(x,y,t){

	p.append("text")
  	 .attr('x',x)
	 .attr("y",y)
	 .attr("stroke","blue")
	 .attr("font-size",20)
	 .text(t);
}

function addcircle(p,r,c){

	p.append("circle")
	.attr("cx",150)
	.attr("cy",150)
	.attr("r",r)
	.attr("fill",c)
	.attr("stroke","black")
	.attr("stroke-width","3");

}

 function start(){ 

    	d3.select(this).transition()
    	.attr("r", 10)
    	.attr("cx",50); 
    }

function showactiveusers(){    
var svg = d3.select("#chActive")
			.append("svg")
  			.attr("width", 400)
  			.attr("height", 200)
  			.append("g")
  			.attr("transform", "translate(200,100)");

var pie = d3.layout
 	   	    .pie()
		    .sort(null) 
		    .value(function(d) { return d; });    
var arc = d3.svg
            .arc()
    		.outerRadius(100)
    		.innerRadius(70);
var g =  svg.selectAll(".arc")
    	    .data(pie(dataset))
    		.enter()
    		.append("g")
    		.attr("class", "arc");

  		   g.append("path")
    		.attr("d", arc)
    		.style("fill", "#fff")
    		.transition()
    		.delay(function (d, i) { return i*300; })
    		.style("fill", function(d,i) { return color(d.data); });

   		   g.append("text")                                     
    		.attr("text-anchor", "middle")                          
    		.text("Total Active Users:55");
    	}

 function showchart(mon_yr){

 	
  	var width =750;
	var height = 210;
	var margin = {top: 30, right: 30, bottom: 30, left: 40};
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
$("#bardata").html("");
var chart = d3.select("#bardata")
	.append("svg")
    .attr("width", width +  margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(0," + margin.top + ")");

var barDataset = [
            {x: "01", y: 10},
            {x: "02", y: 0 },
            {x: "03", y: 13},
            {x: "04", y: 22},
            {x: "05", y: 18},
            {x: "06", y: 15},
            {x: "07", y: 24}, 
            {x: "08", y: 10},
            {x: "09", y: 0 },
            {x: "10", y: 13},
            {x: "11", y: 22},
            {x: "12", y: 18},
            {x: "13", y: 15},
            {x: "14", y: 24}, 
            {x: "15", y: 0 },
            {x: "16", y: 13},
            {x: "17", y: 22},
            {x: "18", y: 18},
            {x: "19", y: 15},
            {x: "20", y: 24}, 
            {x: "21", y: 0 },
            {x: "22", y: 13},
            {x: "23", y: 22},
            {x: "24", y: 18},
            {x: "25", y: 15},
            {x: "26", y: 24}, 
            {x: "27", y: 0 },
            {x: "28", y: 13},
            {x: "29", y: 22},
            {x: "30", y: 18},
           ]

  x.domain(barDataset.map(function(d) { return d.x; }));
  y.domain([0, d3.max(barDataset, function(d) { return d.y; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  var tip = d3.tip()
               .attr("class", "d3-tip")
               .offset([-10, 0])
               .html(function(d) {
           return "<strong>Users:</strong> <span style='color:red'>" + d.y + "</span>";
         }) ;

  chart.call(tip);  

  chart.selectAll(".bar")
      .data(barDataset)
  	  .enter().append("rect")
      .attr("class", "bar")
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide)
      .transition()  
      .delay(function(d,i){            return i*50;        }) 	
      .attr("x", function(d) { return x(d.x); })
      .attr("y", function(d) { return y(d.y); })
      .attr("rx",5)
      .attr("ry",5)
      .attr("height", function(d) { return height - y(d.y); })
      .attr("width", x.rangeBand());

      chart.selectAll("svg")
           .data(barDataset) 
           .enter()
           .append("text")
           .transition()
           .delay(function(d,i){
            return i*50;             // smooth transition from left to right          
          }) 
       
          .text(function(d){
            return d.y;
          }) 
          .attr("x",function(d){
            return x(d.x)+10;
          }) 
          .attr("y",function(d){ 
           return ( y(d.y)-5); 
           })
          .attr("font-family","sans-serif")
          .attr("font-size","11px")
          .attr("fill","black")
          .attr("text-anchor","middle")  ;
}
