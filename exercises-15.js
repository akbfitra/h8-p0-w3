function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    console.log(animals.sort());
    var hasil = [];
    var index = 0
    for (var i = 0; i < animals.length; i++) {
        if (animals[0][0] === animals[i][0]) {
            hasil.push(animals[i]);
        } else {

        }



    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]