
$(document).ready(function(){
	$("#down-all-btn").click(function(){
		console.log('down all clicked');
		// $("div").each(function(){
		// 	console.log($(this).html());
		// });
		chrome.tabs.getSelected(function(tab){
			chrome.tabs.sendRequest(tab.id, {
	      		req: "getSearch"
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

