function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    console.log(animals.sort());
    var hasil = [];

    for (var i = 0; i < animals.length; i++) {
        var temp = animals[i][j]
        for (var j = 0; i < animals.length; j++) {
            if (animals[i][j] == temp) {
                hasil.push(animals[i][j])
            }
            console.log(hasil)
        }



    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]