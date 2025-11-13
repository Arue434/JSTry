function tambahanParasia(a,b) {
return  a + b;
}

let hasil = tambahanParasia(5, 10);
console.log("total :",hasil);

function sapaan(nama) {
    return "Halo, " + nama + "!";
}
let pesan = sapaan("LLL");
console.log("pesan :",pesan);

function transaksi(harga, jumlah) {
    return harga * jumlah;
}
let total = transaksi(150000, 3);
console.log("total :",total);

function informasi(
   nama = "anon",
   umur = 19,
   kota = "surae") {
    return "Nama: " + nama + ", Umur: " + umur + ", Kota: " + kota;
}
let dataOrang = informasi("dawdsa", 25, "vfefe");
console.log(dataOrang);

function average(nilai1, nilai2, nilai3) {
    return (nilai1 + nilai2 + nilai3) / 3;
}

let rataRata = average(80, 90, 85);
console.log ("nilai rata-rata : ",rataRata);
