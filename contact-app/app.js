// Core Module
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Contact-app 
rl.question('Masukan Nama anda : ', (nama)=>{
    rl.question('Masukan No Hp anda : ', (noHp)=>{
            const contact = {nama,noHp};
            const file = fs.readFileSync('data/contacts.json', 'utf-8');
            const contacts= JSON.parse(file);

            contacts.push(contact);
            
            fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
            console.log('Terimakasih sudah memasukan kontak anda.');


        rl.close();
    });
});