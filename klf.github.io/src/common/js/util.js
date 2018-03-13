// 获取URL中的参数
export function getQuery(name, url) {
    var u = url || window.location.search,
        reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
        r = u.substr(u.indexOf('\?') + 1).match(reg);
    return r != null ? r[2] : '';
}

//读取COOKIE
export function getCookie(name) {
    var reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)'),
        val = document.cookie.match(reg);
    return val ? (val[2] ? decodeURIComponent(val[2]) : '') : null;
}

//写入COOKIES
//默认情况下cookie是暂时存在的，他们存储的值只在浏览器会话期间存在，当用户退出浏览器后这些值也会丢失
export function setCookie(name, value, expires, path, domain, secure) {
    var exp = new Date();
    // use expires attribute, max-age is not supported by IE
    expires = expires || null; //expires不设置的时候，用户关闭浏览器值就会丢失
    path = path || '/';
    domain = domain || null;
    secure = secure || false;
    expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : '';
    document.cookie = name + '=' + encodeURIComponent(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
}

// 删除COOKIES
export function delCookie(name) {
    setCookie(name, '', -1);
}

// 延迟执行
export function debounce(func, delay) {
    delay = delay || 200
    let timer

    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// 随机打乱数组
export function shuffle(arr) {
    let _arr = arr.slice()
    for (var i = 0; i < _arr.length; i++) {
        let j = getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
    }
    return _arr
}