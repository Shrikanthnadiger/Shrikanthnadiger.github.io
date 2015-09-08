usersummary("#chUser","Total Users",100,'a');
usersummary("#chLook","Total Looks",1000,'b');
usersummary("#chActiveu","Total Looks",1000,'c');
usersummary("#chLooks","Total  Looks",1000,'d');
usersummary("#chLookss","Total  Looks",1000,'e');
$("#a").css("display","block");
$( document ).ready(function() {
var date=new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var mon_yr=monthNames[date.getMonth()]+'-'+date.getFullYear();
    $("#monyr").text(mon_yr);
    showchart(mon_yr);
})
var dataset=[55,45];
var color = d3.scale.ordinal()
      		  .range(["#98abc5", "#ffffff"]);
showactiveusers();

	    svg=d3.select("#lookh")
	  		.append("svg")
			.attr("width","100%")
			.attr("height",50);
		
		svg.append("text")
	   		.attr("x",200)
	   		.attr("y",30)
	   		.attr("font-size","30px")
	   		.attr("text-anchor","middle")
	   		.text("Most Recent Looks");


svg = d3.select("#lookph").append("svg")
		.attr("width","100%")
		.attr("height",50);
		
		svg.append("text")
	   .attr("x",200)
	   .attr("y",40)
	   .attr("font-size","30px")
	   .attr("text-anchor","middle")
	   .text("Most Popular Look of Today");
	
svg = d3.select("#lookpd").append("svg")
		.attr("width","100%")
		.attr("height",50);
		
	svg.append("text")
	   .attr("x",200)
	   .attr("y",30)
	   .attr("font-size","20px")
	   .attr("text-anchor","middle")
	   .text("www.gmail.com");	 

$.ajax({
	url:"../data.json",
	contentType: "application/json; charset=utf-8",
	dataType: "text",
	success:function(result){
		var r=JSON.parse(result);
		setdata(r.urlval,"#lookd");
	}
});	   

var color = ["blue", "black", "red"];




p=d3.select("#clock").append("svg")
	.attr("width",'300')
	.attr("height",300);

addcircle(p,100,"lightblue");
addcircle(p,5,"black");

textvalues=[[183,83,1],[215,112,2],[228,157,3],[216,198,4],[187,228,5],[145,240,6],[100,230,7],[73,198,8],[63,155,9],[64,115,10],[95,85,11],[135,70,12]];
for(i=0;i<12;i++){

addtext(textvalues[i][0],textvalues[i][1],textvalues[i][2]);

}

s_line=line();
m_line= line();
h_line= line();

	p.append("g")
  	 .attr("transform", "translate(" + 150 + "," + 150 + ")");

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d; }); 
   
repeat(s_line,m_line,h_line);
setInterval(function(){repeat(s_line,m_line,h_line);},1000);

$(".showdata").click(function(e){

$('.showdata').removeClass("active");
$(this).addClass("active");
var type="#"+$(this).attr("type");
$('.data').hide();
$(type).show();

})


var picker = new Pikaday(
    {
        field: document.getElementById('datepicker'),
        firstDay: 1,
        minDate: new Date(2000, 0, 1),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000,2020],
         onSelect: function() {
            var s_date=new Date(document.getElementById('datepicker').value);
            var month=s_date.getMonth()+1;
            document.getElementById('datepicker').value=s_date.getFullYear()+'-'+month+'-'+s_date.getDate();
            $('.mau').html("Most Active User For "+document.getElementById('datepicker').value+" is <span>Shrikant</span>");
            $('.mau').show();
            
        }
 });
$(".sumdiv").click(function(){
$(".sumdiv").removeClass("sactive");
$(".sumdiv").css("border-color","pink")
$(this).css("border-color","#00477F")
$(this).addClass("sactive");
var typ=$(this).attr("type");
$(".arrow").css("display","none");
$("#"+typ).css("display","block");
});



$('.premon').click(function(){
	var thismon=($("#monyr").text()).split("-");
	var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	var date=new Date();
	var tmon=date.getMonth();
	var tyr=date.getFullYear();
	var index=monthNames.indexOf(thismon[0]);
	var cmon=0
	var cyr='';
	if(index > 0){
		cmon=index-1;
		cyr=thismon[1];
		$("#monyr").text(monthNames[cmon]+'-'+cyr);
	}else{
		cmon=11;
		cyr=parseInt(thismon[1])-1;
		$("#monyr").text(monthNames[cmon]+'-'+cyr);
	}
	
	if((tyr == cyr && cmon < tmon) || (cyr < tyr)){
		$(".nexmon").show();
	}
	showchart(monthNames[cmon]+'-'+cyr);
})
$('.nexmon').click(function(){
	var thismon=($("#monyr").text()).split("-");
	var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	var date=new Date();
	var tmon=date.getMonth();
	var tyr=date.getFullYear();
	var index=monthNames.indexOf(thismon[0]);
	var cmon=0;
	var cyr='';
	if(index < 11){
		cmon=index+1;
		cyr=thismon[1];
		$("#monyr").text(monthNames[cmon]+'-'+cyr);
	}else{
		cmon=0;
		cyr=parseInt(thismon[1])+1;
		$("#monyr").text(monthNames[cmon]+'-'+cyr);
	}
	
	if((tyr == cyr && cmon >= tmon) || (cyr > tyr)){
		$(".nexmon").hide();
	}
	showchart(showchart(monthNames[cmon]+'-'+cyr));
})