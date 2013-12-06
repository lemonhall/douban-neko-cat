


setInterval(function(){
	console.log("5 seconed...past...");
	chrome.extension.sendMessage({greeting:"hello"},function(response) {

	});
},1000*10);