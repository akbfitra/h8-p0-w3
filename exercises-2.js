//--------------------TUGAS STRING TERBALIK--------------------------------------

function balikString(str) {

    var output = '';
    for (var i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
    return output;
}
console.log(balikString('hello world!'));