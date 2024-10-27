import { useContext } from "react"
import { GameContext } from "../contexts/game"

export const useGame = () => {
    const { setNumberToFind, finished, win, partialResult, addNewNumberPlayed, numberToFind, resetGame, points, movesLeft } = useContext(GameContext)

    return { setNumberToFind, finished, win, partialResult, addNewNumberPlayed, numberToFind, resetGame, points, movesLeft }
}