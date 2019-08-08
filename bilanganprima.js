function prima(num) {
    if (num === 1 || num === undefined || num === 0) {
        return false
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }

    }
    return true
}
console.log(prima(2))
console.log(prima(5))
console.log(prima(7))
console.log(prima(9))
console.log(prima(10))