$(document).ready(function(){
    console.log('Page Ready');

    chrome.extension.onRequest.addListener(
        function(request, sender, sendResponse) {
            if (request.req == "getSearch"){  
                console.log('get ok');
                var resArr = [];
                $("[href$='.pdf']").each(function(){
                    resArr.push($(this)[0].href);
                    console.log($(this)[0].href);
                });
                sendResponse({
                    //data: $("#hello") // 获取id是hello的元素发过去
                    data: resArr
                });
            }
        }
    );
});
