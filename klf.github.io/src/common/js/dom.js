export function addClass(el, className) {
    if(hasClass(el, className)){
        return
    }
    let newClass = el.className.split(/\s+/g)
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)') ;
    return reg.test(el.className);
}

export function removeClass(el, className) {
    if(!hasClass(el, className)){
        return
    }
    let list = []
    let newClass = el.className.split(/\s+/g)
    newClass.forEach((item) => {
        if(item != className) {
            list.push(item)
        }
    })
    el.className = list.join(' ')
}