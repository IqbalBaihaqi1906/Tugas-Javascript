// No 1
let divisi = prompt("Masukan divisi kamu : (CEO/HR/CTO/PROGRAMMER)")
if (divisi == "CEO"){
    alert("Tugas kamu adalah sebagai orang yang memimpin suatu perusahaan")
    console.log("Tugas kamu adalah sebagai orang yang memimpin suatu perusahaan");
} else if (divisi == "HR"){
    alert("Tugas kamu adalah sebagai orang yang melakukan rekrutmen untuk calon pegawai baru")
    console.log("Tugas kamu adalah sebagai orang yang melakukan rekrutmen untuk calon pegawai baru");
} else if (divisi == "CTO"){
    alert("Tugas kamu adalah sebagai orang yang bertanggung jawab atas pengembangan teknologi dalam suatu perusahaan")
    console.log("Tugas kamu adalah sebagai orang yang bertanggung jawab atas pengembangan teknologi dalam suatu perusahaan");
} else if (divisi == "PROGRAMMER"){
    alert("Tugas kamu adalah sebagai orang yang membuat program ")
    console.log("Tugas kamu adalah sebagai orang yang membuat program ");
} else{
    alert("Masukan input dengan benar")
}

// No 2
let a = prompt("Masukan angka A: ")
let b = prompt("Masukan angka B: ")
if (a > b){
    console.log("angka A lebih besar dari angka B")
} else if (b > a){
    console.log("angka B lebih besar dari angka A")
} else{
    console.log("angka A dan B sama besar");
}

// No 3
let hari = 6
switch(hari){
    case 1 :
        console.log("sekarang adalah hari minggu");
        break;
    case 2 :
        console.log("sekarang adalah hari senin");
        break;
    case 3 :
        console.log("sekarang adalah hari selasa");
        break;
    case 4 :
        console.log("sekarang adalah hari rabu");
        break;
    case 5 :
        console.log("sekarang adalah hari kamis");
        break;
    case 6 :
        console.log("sekarang adalah hari jumat");
        break;
    case 7 :
        console.log("sekarang adalah hari sabtu");
        break;
}


// No 4
player = "BOTTOM"
switch(player){
    case "UP" :
        console.log("Karakter berjalan keatas");
        break;
    case "RIGHT" :
        console.log("Karakter berjalan kekanan");
        break;
    case "BOTTOM" :
        console.log("Karakter berjalan kebawah");
        break;
    case "LEFT" :
        console.log("Karakter berjalan kekiri");
        break;
}