(function() {
    setTimeout(function(){
        console.log("it's item page!");
        var REG_IETM = /detail.damai.cn\/item.htm/;
        var REG_ORDER = /buy.damai.cn\/orderConfirm/;
        var url = window.location.href

        if (url.match(REG_IETM)) {
            var p;
            var s;

            p = document.getElementsByClassName('skuname')[3]
            p.click()
            

            // number
            // n = document.getElementsByClassName('cafe-c-input-number-handler cafe-c-input-number-handler-up')[0]
            // n.click()

            // submit
            s = document.getElementsByClassName('buybtn')[0]
            s.click()
        } else if (url.match(REG_ORDER)) {
            var b,c;
            // booker
            b = document.getElementsByClassName('next-checkbox-inner')[0]
            b.click()

            // confirm
            c = document.getElementsByClassName('submit-wrapper')[0].children[0]
            c.click()
        } else {
            console.log("ERROR: url error!")
        }
    }, 400)


    var select = function() {

    }

    
    
})();