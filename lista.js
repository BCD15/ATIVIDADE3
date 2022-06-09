let listaAnimes = [
]

function alternarItem(item) {
    const valor = listaAnimes.find((i) => i === item)
    valor.removido = !valor.removido
    renderListaAnimes()
}

function addItemUL(item) {
    const inputItem = document.createElement('input')
    inputItem.setAttribute('type', 'checkbox')
    inputItem.addEventListener('click', () => alternarItem(item))

    const labelItem = document.createElement('label')
    labelItem.appendChild(inputItem)
    labelItem.appendChild(document.createTextNode(item.item))

    const itemLista = document.createElement('li')
    itemLista.appendChild(labelItem)
    if (item.removido) {
        itemLista.setAttribute('class', 'removed')
        inputItem.setAttribute('checked', true)
    }

    const lista = document.getElementById('lista-anime')
    lista.appendChild(itemLista)
}

function renderListaAnimes() {
    document.getElementById('lista-anime').innerHTML = ''

    for (const item of listaAnimes) {
        addItemUL(item)
    }
}

function addItem() {
    const newItemText = document.getElementById('new-item').value
    if (newItemText != '') {
        const newItem = { id: 1, item: newItemText }
        listaAnimes.push(newItem)
        addItemUL(newItem)
    }
}

renderListaAnimes()