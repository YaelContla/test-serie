// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 2;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Función para el n-ésimo número primo
function primo(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (esPrimo(num)) {
            count++;
        }
        num++;
    }
    return num - 1;
}

// Función para el n-ésimo número de Fibonacci
function fibonacci(n) {
    let a = 0, b = 1, temp;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Función para el n-ésimo número triangular
function triangular(n) {
    return (n * (n + 1)) / 2;
}

// Función par la serie
export function serie_n(n) {
    const numPrimo = primo(n);
    const numTriangular = triangular(n - 1);
    const numFibonacci = fibonacci(n + 2);
    
    return (3 * numPrimo + numTriangular) / (2 * numFibonacci);
}

// console.log(serie_n(9));