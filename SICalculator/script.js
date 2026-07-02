function SimpleIntrest() {
    const amount = document.querySelector('#inp1').value
    const rate = document.querySelector('#inp2').value
    const year = document.querySelector('#inp3').value

    const simpleintrest = parseFloat((amount * rate * year) / 100)

    document.querySelector('#result').textContent = simpleintrest
}