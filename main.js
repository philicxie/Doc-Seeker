
$(document).ready(function(){
	console.log('readay');
	$("#addBtn").click(function(){
		console.log('clicked');
		// $("div").each(function(){
		// 	console.log($(this).html());
		// });
		chrome.tabs.getSelected(function(tab){
			chrome.tabs.sendRequest(tab.id, {
	      		hello: "ok"
	    	}, function(response){
				console.log(response);
				response.data.map(function(item){
					chrome.downloads.download({url: item}, function success(res){
						console.log(res);
					});
				});
                
	        // tab做出响应，发来的response
			});
		});

	});
});

