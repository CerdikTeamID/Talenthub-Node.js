const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Apa kamu ingin menghitung luas/keliling persegi (K/L) ? ", function(operasi) {
    rl.question("Masukan panjang persegi? ", function(panjang) {
        rl.question("Masukan lebar persegi? ", function(lebar) {
            var luas 
            var keliling
            if(operasi === 'L' || operasi ==='luas') { 
                console.log("Luas persegi panjang adalah : ", luas = panjang * lebar)
            }else if(operasi === 'K'|| operasi ==='keliling'){ 
                console.log("Keliling persegi panjang adalah :", keliling = (2 * panjang) + (2 *lebar))
            }else{
                console.log("Invalid input. Please enter 'L' for Luas or 'K' for Keliling.")
            }
            rl.close();
        })
    });
});

rl.on("close", function() {
    console.log("\n terimakasih !!!");
    process.exit(0);
});