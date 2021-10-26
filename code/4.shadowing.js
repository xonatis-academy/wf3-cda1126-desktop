let number = 10;

function double() {
    let number = 20; // on a utilisé le meme nom, mais pour une variable différente
    // *polymorphisme* (terme architectural) -> shadowing/hiding (terme technique)
    number = number * 2;
}

double();

console.log(number);
