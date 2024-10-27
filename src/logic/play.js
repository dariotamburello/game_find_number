export const calculate = ({ numberToFind, numbersPlayed }) => {
    let correctNumberArray = numberToFind.split('')
    let lastNumberPlayedArray = structuredClone(numbersPlayed.slice(-1)[0])
    let qtySome = 0, qtyFixed = 0

    lastNumberPlayedArray.forEach((value, index) => {
        if (value === correctNumberArray[index]) {
            lastNumberPlayedArray[index] = 'A'
            correctNumberArray[index] = 'B'
            qtyFixed += 1
        }
    })
    lastNumberPlayedArray.forEach(ln => {
        const someIdx = correctNumberArray.findIndex(cn => ln === cn)
        if (someIdx === -1) return
        qtySome += 1
        correctNumberArray[someIdx] = 'X'
        return
    })

    return {
        id: numbersPlayed.indexOf(numbersPlayed.slice(-1)[0]),
        value: numbersPlayed.slice(-1)[0],
        someChoise: qtySome,
        fixedChoise: qtyFixed
    }
}