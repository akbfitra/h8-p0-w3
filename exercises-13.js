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
    // console.log(o)
    // console.log(x)
    // console.log(o.length)
    // console.log(x.length)
    if (x.length == 0) {
        return 0
    }
    //console.log(x[0] - o[0])
    var jarak = []
    for (var j = 0; j < x.length; j++) {
        var hasil = Math.abs(x[j] - o[0])
            //console.log(hasil)
        jarak.push(hasil)
    }
    console.log(jarak)
    var out = jarak[0]
    for (var k = 1; k < jarak.length; k++) {
        if (jarak[k] < out) {
            out = jarak[k]
        }
    }
    return out

}

// function terkecil(number) {
//     var temp = number[0];
//     for (var i = 1; i < number.length; i++) {

//         if (number[i] < temp) {
//             temp = number[i]
//         }
//     }
//     return temp
// }


// console.log(terkecil([4, 5, 6, 2, 3, 7]))

// TEST CASES
console.log(targetTerdekat(['x', ' ', ' ', 'x', ' ', 'o', 'o', ' '])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2