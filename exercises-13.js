function targetTerdekat(arr) {
    // you can only write your code here!
    var o = [];
    var x = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            o.push(i)
        }
        if (arr[i] === 'x') {
            x.push(i)
        }
    }

    if (x.length == 0) {
        return 0
    }
    var jarak = []
    for (var j = 0; j < x.length; j++) {
        var hasil = Math.abs(x[j] - o[0])
        jarak.push(hasil)
    }

    var out = jarak[0]
    for (var k = 1; k < jarak.length; k++) {
        if (jarak[k] < out) {
            out = jarak[k]
        }
    }
    return out

}


// TEST CASES
console.log(targetTerdekat(['x', ' ', ' ', 'x', 'x', 'o', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2