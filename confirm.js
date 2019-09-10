!function () {
    console.log("it's confirm page!");
    var REG_IETM = /detail.damai.cn\/item.htm/;
    var REG_ORDER = /buy.damai.cn\/orderConfirm/;
    var url = window.location.href

    var select_queue;
    var t;

    var poll = function (select_queue) {
        var select = select_queue.shift();
        if (!select) return;

        var jumpSuccess = setInterval(function () {
            var ele = select()
            if (!!ele) {
                ele.click()
                clearInterval(jumpSuccess)
                poll(select_queue)
            }
        }, 10)
    }



    if (url.match(REG_IETM)) {
        select_queue = [
            function () { return document.getElementsByClassName('skuname')[1]; },
            function () { return document.getElementsByClassName('cafe-c-input-number-handler cafe-c-input-number-handler-up')[0]; },
            function () { return document.getElementsByClassName('buybtn')[0]; }
        ];

        // 等待倒计时结束
        var waitcnt = 0;
        var wait = setInterval(function () {
            // !HTMLCollection[] is not true when it's empty
            var cntdown = document.getElementsByClassName('dm-countdown')[0];
            if (!cntdown) {
                poll(select_queue);
                clearInterval(wait);
            }
            waitcnt++;
            if (waitcnt % 150 == 0) {
                console.log('waiting...');
            }

        }, 200) // 第一个dm-countdown 是undifined，不知为何







    } else if (url.match(REG_ORDER)) {
        t = [
            function () { return document.getElementsByClassName('buyer-list-item')[0].children[0]; },
            function () { return document.getElementsByClassName('buyer-list-item')[1].children[0]; },
            function () { return document.getElementsByClassName('submit-wrapper')[0].children[0]; }
        ];
        poll(t);
    } else {
        console.log("ERROR: url error!")
    }





}();