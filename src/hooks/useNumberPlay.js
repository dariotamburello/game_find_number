import { useContext } from "react"
import { NumberPlayContext } from "../contexts/numberPlay"

export const useNumberPlay = () => {
    const { numberPlay, setNumberPlay, newNumberPlay, removeLastNumber } = useContext(NumberPlayContext)

    return { numberPlay, setNumberPlay, newNumberPlay, removeLastNumber }
}