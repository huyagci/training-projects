let firstName = prompt("Adiniz?");
let age = prompt("Yasiniz?");
let info = document.querySelector("#info");

if (firstName && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz.";
} else if (!firstName) {
    info.innerHTML = "Isminizi girmediniz.";
} else if (!age) {
    info.innerHTML = "Yasinizi girmediniz.";
} else if (!(age >= 18)) {
    info.innerHTML = "Yasiniz yeterli degildir.";
};

//else if yerine switch
let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        case 'kareAl':
            return (Math.pow(a, 2) + " ve " + Math.pow(b, 2)); 
        break;
        case 'kareKokAl':
            return (Math.sqrt(a) + " ve " + Math.sqrt(b));
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};