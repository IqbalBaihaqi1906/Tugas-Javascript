// Soal 1
for (let i = 1; i <= 100;){
    document.write("User ke -" + i + "<br>")
    i+=1
} 

// Soal 2
for (let i = 0; i <= 19;){
    console.log(i);
    i += 2
}

// Soal 3
for (let i = 0;i <= 20;i++){
    if (i % 2 == 0){
        console.log(i + " Adalah bilangan genap");
    } else {
        console.log(i + " Adalah bilangan ganjil");
    }
}

// Soal 4
let count = 0;
while (true) {
    let ulang = confirm("Apakah anda mau mengulang?");
    if (ulang == false) {
        console.log("Perulangan telah dilakukan sebanyak " + count);
        alert("Perulangan telah dilakukan sebanyak " + count);
        break;
    } else {
        count++;
    }
}

// Soal 5
do {
    kuis = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
    if (kuis == "Impact Byte") {
        alert("Selamat jawaban kamu benar");
        break;
    }
} while(true)