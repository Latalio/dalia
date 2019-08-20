



// prices
p = document.getElementsByClassName('skuname')[0]
p.click()

// number
// n = document.getElementsByClassName('cafe-c-input-number-handler cafe-c-input-number-handler-up')[0]
// n.click()

// submit
s = document.getElementsByClassName('buybtn')[0]
s.click()

// 等待确定订单页面跳转
var jumpSuccess = setInterval(function() {
    if(document.title == '确认订单') {
        alert('跳转成功')
        clearInterval(jumpSuccess)
    }
}, 100)

// booker
b = document.getElementsByClassName('next-checkbox-inner')[0]
b.click()

// comfire
c = document.getElementsByClassName('next-btn next-btn-normal next-btn-medium')[0]
c.click()