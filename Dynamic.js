// JavaScript Document
$(document).ready(function(){
	$(".bottomNav").eq(0).hover(function(){DropDown(0)},function(){RollUp(0)});
	$(".bottomNav").eq(1).hover(function(){DropDown(1)},function(){RollUp(1)});
	$(".bottomNav").eq(2).hover(function(){DropDown(2)},function(){RollUp(2)});
	$(".bottomNav").eq(3).hover(function(){DropDown(3)},function(){RollUp(3)});
	
	
	function DropDown(x){
		var section = $(".bottomNav").eq(x);
		
		if(x > 0){
			var section2 = $(".bottomNav").eq(x-1);
			section2.css({"border-right":"none"});
		}
		
		section.css({"border":"2px solid white",
					 "border-radius": "15px",
					"width": "auto", "max-height":"60%",
					"height": "60%",
					"z-index":1});
		
		$("#left").css({"filter": "blur(4px)"});
		$("#right").css({"filter": "blur(4px)"});
		$("#top").css({"filter": "blur(4px)"});
		$("#bottom-main").css({"filter": "blur(4px)"});
		
		
	}
	
	function RollUp(x){
		
		var section = $(".bottomNav").eq(x);
		
		if(x > 0){
			var section2 = $(".bottomNav").eq(x-1);
			section2.css({"border-right":"2px solid white"});
		}
		
		section.css({"height":"10%",
					"max-height": "80px"});
		
		if(x!=3){
			section.css({"border-right":"2px solid white"});
		}
		else{
			section.css({"border-right": "none"});
		}
		
		section.css({"border-left":"none",
					"border-top":"none",
					"border-bottom":"none",
					"border-radius":"0px",});
		
		
		$("#left").css({"filter": "none"});
		$("#right").css({"filter": "none"});
		$("#top").css({"filter": "none"});
		$("#bottom-main").css({"filter": "none"});
		
	}
	
	
	
	
})





/*Navigation*/

function TextChange(x){
	document.querySelector("#right").querySelector("#projectName").textContent = x;
	document.querySelector("#right").querySelector("#projectName").style.webkitTransition = 'opacity 1s';
}

function TextReturn(x){
	document.querySelector("#projectName").textContent = "Menu";
}
