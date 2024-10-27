export const generateRandomNumber = (numDigits) => {
    const maxNumber = Math.pow(10, numDigits)
    const randomNum = Math.floor(Math.random() * maxNumber)
    //console.log(String(randomNum).padStart(numDigits, '0'))
    return String(randomNum).padStart(numDigits, '0')
}