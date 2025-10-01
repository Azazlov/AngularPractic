function main() {
    let age = Math.floor(Math.random() * 100);
    if (age < 18) {
        console.log('Доступ запрещен');
        return;
    }
    else if (age >= 18) {
        for (let i = 1; i < 11; i++) {
            console.log(age * i);
        }
    }
}
main();
