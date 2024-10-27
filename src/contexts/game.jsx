import { createContext, useEffect, useState } from "react"
import { calculate } from "../logic/play"
import { useNumberPlay } from "../hooks/useNumberPlay"
import { useConfiguration } from "../hooks/useConfiguration"
import { generateRandomNumber } from "../logic/generateNumber"
import { calculatePoints } from "../logic/points"
import { useStatistics } from "../hooks/useStatistics"

export const GameContext = createContext()

// eslint-disable-next-line react/prop-types
export const GameProvider = ({ children }) => {

    const { digits, maxAttempts, difficulty } = useConfiguration()
    const { setNumberPlay } = useNumberPlay()

    const [numberToFind, setNumberToFind] = useState(null)
    const [numbersPlayed, setNumbersPlayed] = useState([])
    const [finished, setFinished] = useState(false)
    const [win, setWin] = useState(null)
    const [partialResult, setPartialResult] = useState([])
    const [points, setPoints] = useState(0)

    const { addPoints } = useStatistics()

    useEffect(() => {
        if (numbersPlayed.length > 0) {
            const lastPlayed = numbersPlayed.slice(-1)[0].join("")
            calculateResult()
            if (lastPlayed === numberToFind) {
                const points = calculatePoints(difficulty, digits, maxAttempts, numbersPlayed.length)
                setPoints(points)
                addPoints(points)
                setWin(true)
                setFinished(true)
            } else if (numbersPlayed.length >= maxAttempts) {
                setWin(false)
                setFinished(true)
            }
        }
    }, [numbersPlayed, numberToFind])

    useEffect(() => {
        setNumberToFind(generateRandomNumber(digits))
    }, [digits])

    const addNewNumberPlayed = (number) => {
        if (finished || number.length < digits) return
        setNumbersPlayed(prevstate => [...prevstate, number])
        setNumberPlay([])
    }

    const calculateResult = () => {
        const result = calculate({ numberToFind, numbersPlayed })
        setPartialResult(prevResults => [...prevResults, result])
    }

    const resetGame = () => {
        setWin(false)
        setFinished(false)
        setNumbersPlayed([])
        setPartialResult([])
        setNumberToFind(generateRandomNumber(digits))
    }

    const movesLeft = () => {
        return maxAttempts - numbersPlayed.length
    }

    return (
        <GameContext.Provider value={{
            setNumberToFind,
            addNewNumberPlayed,
            finished,
            win,
            partialResult,
            numberToFind,
            resetGame,
            points,
            movesLeft
        }}>
            {children}
        </GameContext.Provider>
    )
}
