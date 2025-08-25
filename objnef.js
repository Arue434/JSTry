const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mur = [
    {nama: "ak", nilai: 90},
    {nama: "bk", nilai: 80},
    {nama: "ck", nilai: 70},
    {nama: "dk", nilai: 60}
];

function grading (nilai) {
   
if (nilai >= 85)return "A";
else if (nilai >= 75) return "B";
else if (nilai >= 60) return "C";
else if (nilai >= 40) return "D";
else return "E";
}

function ask () {
rl.question("masukkan nama : ", function(input) {
    if (input.toLowerCase() === 'done') {
        console.log("terima kasih");
        console.log("daftar nama dan nilainya:");
        mur.forEach(s => {
            console.log(s.nama + " : " + grading(s.nilai));
        });
        return;
    }
    let orang = mur.find(s => s.nama.toLowerCase() === input.toLowerCase());

    if (!orang) {
        rl.question("nama baru, masukkan nilainya :" + input + " : ", function(nilaibaru) {
            let nilai = Number(nilaibaru);
            if (isNaN(nilai)) {
                console.log("harus pakai angka");
            }   
            else {
                mur.push({nama: input, nilai: nilai});
                console.log(`${input} mendapat grade ${grading(nilai)}`);
            }
            ask();
        });
    }   
    
    else {
        console.log(orang.nama + " nilainya adalah : " + grading(orang.nilai));
        ask();
    }

});
}

console.log("Ketik nama atau ketik 'done' untuk keluar");
console.log("Daftar nama: ak, bk, ck, dk");
console.log("anda bisa menambahkan nama baru dengan mengetik nama yang tidak ada di daftar");
ask();


