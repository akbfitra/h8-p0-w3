function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var array = kalimat.split(' ');
    var counter = 0
    console.log(array);
    for (var i = 0; i < array.length; i++) {
        counter++
    }
    return counter
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5