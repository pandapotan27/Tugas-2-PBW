// 2. Buatlah kalkulator dengan menggunakan javascript serta buat lah menggunakan arrow function dan spread operator yang terdiri dari (+-/*%)

// Definisikan fungsi kalkulator dengan arrow function dan spread operator
const calculator = (operator, ...operands) => {
    let result;

    // Periksa operator dan lakukan operasi yang sesuai
    switch (operator) {
        case '+':
            result = operands.reduce((acc, val) => acc + val, 0);
            break;
        case '-':
            result = operands.reduce((acc, val) => acc - val);
            break;
        case '*':
            result = operands.reduce((acc, val) => acc * val, 1);
            break;
        case '/':
            result = operands.reduce((acc, val) => acc / val);
            break;
        case '%':
            result = operands.reduce((acc, val) => acc % val);
            break;
        default:
            result = "Operator tidak valid";
    }

    return result;
};

// Ambil input dari terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tampilkan prompt untuk operator
readline.question('Masukkan operator (+, -, *, /, %): ', (operator) => {
    // Tampilkan prompt untuk operand
    readline.question('Masukkan operand dipisahkan dengan spasi: ', (operandsInput) => {
        const operands = operandsInput.split(' ').map(Number); // Pisahkan operand dan ubah ke tipe Number
        const result = calculator(operator, ...operands); // Panggil fungsi kalkulator dengan operator dan operand

        console.log('Hasil:', result); // Tampilkan hasil
        readline.close(); // Tutup terminal input
    });
});

