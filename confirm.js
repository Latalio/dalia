!function() {
    select_queue = [];
    var poll = function(select) {
        var jumpSuccess = setInterval(function() {
            var ele = select()
            if (!!ele) {
                ele.click()
                clearInterval(jumpSuccess)
                if (!!select_queue) {
                    
                }
            }
        }, 100)

        
    }
}();