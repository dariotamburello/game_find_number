import { createContext, useState } from "react";
import { saveStatistics } from "../helpers/storageData";

export const StatisticsContext = createContext()

const defaultStatistics = {
    games: 0,
    points: 0,
    firstGame: ''
}

const initialStatistics = JSON.parse(window.localStorage.getItem('statistics')) || defaultStatistics

// eslint-disable-next-line react/prop-types
export const StatisticsProvider = ({ children }) => {
    const [totalPoints, setTotalPoints] = useState(initialStatistics.points)
    const [totalGames, setTotalGames] = useState(initialStatistics.games)
    const [firstGameDate, setFirstGameDate] = useState(initialStatistics.firstGame)

    const addPoints = (points) => {
        let date = firstGameDate
        if (date === '') {
            date = new Date().toISOString()
            setFirstGameDate(date)
        }
        const newPoints = totalPoints + points
        setTotalPoints(newPoints)
        const newGames = totalGames + 1
        setTotalGames(newGames)
        saveStatistics({ 'games': newGames, 'points': newPoints, 'firstGame': date })
    }

    const restartStatistics = () => {
        setTotalPoints(0)
        setTotalGames(0)
        setFirstGameDate('')
        saveStatistics({ 'games': 0, 'points': 0, 'firstGame': '' })
    }

    return <StatisticsContext.Provider value={{
        totalPoints,
        addPoints,
        totalGames,
        firstGameDate,
        restartStatistics
    }}>
        {children}
    </StatisticsContext.Provider>
}