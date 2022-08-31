console.log('JS - OK!');

let daComprare = '';

while (daComprare !== 'FINITO') {
    console.log('entra ciclo while');
    daComprare = prompt('Inserire prodotto da comprare o digitare "Finito" per terminare la lista').toUpperCase();

    let lista = document.createElement('li');
    let testoLista = document.createTextNode(daComprare);

    lista.appendChild(testoLista);

    document.getElementById('lista-spesa').appendChild(lista);

}
console.log('esce ciclo while');