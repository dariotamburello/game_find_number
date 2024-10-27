import { useContext } from "react"
import { StatisticsContext } from "../contexts/statistics"

export const useStatistics = () => {
    const { totalPoints, addPoints, totalGames, firstGameDate, restartStatistics } = useContext(StatisticsContext)

    return { totalPoints, addPoints, totalGames, firstGameDate, restartStatistics }
}