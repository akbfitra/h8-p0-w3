var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(input) {
    input.splice(5, 1, "Pria", "SMA Internasional Metro")
    console.log(input);
    var bulan = input[3].split('/')
    bulanJoin = bulan.join('-');
    switch (bulan[1]) {
        case '01':
            console.log('januari');
            break;
        case '02':
            console.log('februari');
            break;
        case '03':
            console.log('maret');
            break;
        case '04':
            console.log('april');
            break;
        case '05':
            console.log('mei');
            break;
        case '06':
            console.log('juni');
            break;
        case '07':
            console.log('juli');
            break;
        case '08':
            console.log('agustus');
            break;
        case '09':
            console.log('september');
            break;
        case '10':
            console.log('oktober');
            break;
        case '11':
            console.log('november');
            break;
        case '12':
            console.log('desember');
            break;
        default:
            console.log('format tanggal salah');
            break;
    }
    var bulanReverse = bulan.sort(function(a, b) { return b - a });
    console.log(bulanReverse)
    console.log(bulanJoin)
    var namaKurangin = input[1].slice(0, 15)
    console.log(namaKurangin)
}