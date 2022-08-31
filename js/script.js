console.log('JS - OK!');

let daComprare = 'a';

while (daComprare !== 'FINITO' && daComprare !== '') {
    daComprare = prompt('Inserire prodotto da comprare o digitare "Finito" per terminare la lista').toUpperCase();

    if (daComprare !== 'FINITO' && daComprare !== '') {
        let lista = document.createElement('li');
        let testoLista = document.createTextNode(daComprare);

        lista.appendChild(testoLista);

        document.getElementById('lista-spesa').appendChild(lista);
    }

}