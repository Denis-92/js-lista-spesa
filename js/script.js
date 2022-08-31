console.log('JS - OK!');

let daComprare = '';

while (daComprare !== 'FINITO') {
    daComprare = prompt('Inserire prodotto da comprare o digitare "Finito" per terminare la lista').toUpperCase();

    if (daComprare !== 'FINITO') {
        let lista = document.createElement('li');
        let testoLista = document.createTextNode(daComprare);

        lista.appendChild(testoLista);

        document.getElementById('lista-spesa').appendChild(lista);
    }

}