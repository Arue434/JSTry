const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function grading (nilai) {
   
if (nilai >= 85)return "A";
else if (nilai >= 75) return "B";
else if (nilai >= 60) return "C";
else if (nilai >= 40) return "D";
else return "E";
}

function aske(){
rl.question("masukkan nilainya : ", function(input) {
    if (input.toLowerCase() === 'done') {
        console.log("terima kasih");
        rl.close();
        return;
    }
    
    let nilai = Number(input);

    if (isNaN(nilai)) {
        console.log("harus pakai angka");
    }   
    else {
        console.log("nilainya adalah : " + grading(nilai));
    }
    aske();
});
}
console.log("masukkan nilai atau ketik 'done' untuk keluar");
aske();

