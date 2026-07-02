const setText = (e) => {
    if (result.value == "Invalid") {
        result.value = e.target.textContent

    } else
        result.value += e.target.textContent
}

const getResult = () => {
    // console.log(result.value)
    try {
        result.value = eval(result.value)

    } catch {
        result.value = "Invalid"

    }
}