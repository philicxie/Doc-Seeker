$(document).ready(function(){
    console.log('Page Ready');

    chrome.extension.onRequest.addListener(
        function(request, sender, sendResponse) {
            if (request.hello == "ok"){  // 在得到request请求是ok的时候 做下面的操作
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
