var kitten4 = chrome.extension.getURL("kitten4.wav");
var kitten_img = chrome.extension.getURL("neko.gif");

var html='<div id="neko"></div>'+
		 '<video controls="" name="media" id="miao" style="display:none">'+
			'<source src="'+kitten4+'" type="audio/x-wav">'+
		 '</video>';


$(".aside").prepend(html);

var miao_ctl=$("#miao")[0];
var neko_ctl=$("#neko");

//console.log(kitten_img);
neko_ctl.css("background-image","url("+kitten_img+")");
neko_ctl.css("background-position","-64px 0px");

neko_ctl.on('webkitAnimationEnd', function() {
    this.style.webkitAnimationPlayState = "paused";
    neko_ctl.css("-webkit-animation","mymove 6s");
    this.style.webkitAnimationPlayState = "running";
});

neko_ctl.click(function(){
		 neko_ctl.css("-webkit-animation","miao 3s");
		 this.style.webkitAnimationPlayState = "running";
		 miao_ctl.play();
		 setTimeout(function(){
		 		miao_ctl.play();
		 },4800);
});

setInterval(function(){
	var lastWrite  = localStorage["neko_timer"];
	if(lastWrite){
			var k=parseInt(lastWrite.toString());
			var lastTime   = new Date(k);
			var now		   = Date.now();
			var timePast   = (now - lastTime)/1000/60;
			//console.log(lastWrite);
			//console.log(lastTime);
			//console.log(timePast);

				if(timePast>10){
					neko_ctl.trigger("click");
					localStorage["neko_timer"]=Date.now();
				}
	}else{
		localStorage["neko_timer"]=Date.now();
	}
},1000*5);   
