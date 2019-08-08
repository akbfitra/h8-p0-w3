function groupAnimals(animals) {
    // you can only write your code here!
    var sort = animals.sort()
    var hasil = [
        []
    ];
    var index = 0;

    hasil[index].push(sort[0])

    for (var i = 1; i < sort.length; i++) {
        if (sort[i][0] === hasil[index][0][0]) {
            hasil[index].unshift(sort[i])
        } else {
            index++;
            hasil[index] = [sort[i]]
        }
    }
    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]