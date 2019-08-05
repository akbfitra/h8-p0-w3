function pasanganTerbesar(num) {
    // you can only write your code here!
    numStr = String(num);
    numMax = 0;
    for (var i = 0; i < numStr.length; i++) {
        var cek = numStr[i] + numStr[i + 1]
        if (cek > numMax) {
            numMax = cek;
        }
    }
    return numMax
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99