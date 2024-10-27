import { createContext, useState } from "react";

export const NumberPlayContext = createContext()

// eslint-disable-next-line react/prop-types
export const NumberPlayProvider = ({ children }) => {

    const [numberPlay, setNumberPlay] = useState([])

    const newNumberPlay = (number) => {
        setNumberPlay([...numberPlay, number])
    }

    const removeLastNumber = () => {
        if (numberPlay.length === 0) return
        const newNum = numberPlay.slice(0, numberPlay.length - 1)
        setNumberPlay(newNum)
    }

    return (
        <NumberPlayContext.Provider value={{
            numberPlay,
            newNumberPlay,
            setNumberPlay,
            removeLastNumber
        }}>
            {children}
        </NumberPlayContext.Provider>
    )
}