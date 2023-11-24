

// 缓存数据所用
function memorize(f) {
    if (typeof f !== 'function') return
    var cache = {}
    return function () {
        var key = arguments.length +
            Array.prototype.join.call(arguments, ",")
        if (key in cache) {
            return cache[key]
        } else {
            var res = f.apply(this, arguments)
            cache[key] = res
            return res
        }
    }
}

const memorizdAdd = memorize(add);


