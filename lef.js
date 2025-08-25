console.log("This is dd");

const name = {nama_saya: "dd", umur_saya: 18 + "tahun"};
console.log(name);

console.log("Luas persegi panjang");

let panjang = 20;
let lebar = 5;
function LuasPersegipjg (panjang, lebar) 
{
    let luas = panjang * lebar;
    return luas;
}

console.log("luasnya adalah: " + LuasPersegipjg(panjang, lebar));

console.log("grade");

function grading (nilai) {
let grade = nilai;


if (nilai > 75 ) {
    console.log("lolos");
}

else if (nilai < 75) {
    console.log("gak lolos");
}

return grade;
}

console.log(grading(90));
console.log(grading(74));


for (let i = 1; i <= 10; i++) {
    console.log("angka " + i);
}

let namu = ["dd", "de", "da", "di"];
console.log("namanya : " + namu);

console.log ("Luas lingkaran");
Math.phi = 3.14;
let r = 7;
function Luaslingkaran (r) {
    let luas = Math.phi * r * r;
    return luas;
}
console.log("luasnya adalah: " + Luaslingkaran(r));

let porf = {nama: "ak", umur: "20+" + "tahun"};
console.log(porf);