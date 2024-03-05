// 1. Buatlah program javascript untuk mencetak deret Fibonacci! 
// PENJELASAN
// Fibonacci adalah deret angka di mana setiap angka didapatkan dengan menjumlahkan dua angka sebelumnya

function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Menentukan berapa banyak bilangan Fibonacci yang ingin dicetak
  const n = 10;
  
  // Mencetak deret Fibonacci
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
  
