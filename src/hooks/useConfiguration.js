import { useContext } from "react"
import { ConfigurationContext } from "../contexts/configuration"

export const useConfiguration = () => {
    const { darkMode,
        changeDarkMode,
        difficulty,
        changeDifficulty,
        digits,
        selectQtyDigits,
        maxAttempts,
        modifyQtyAttemps,
        language,
        changeLanguage
    } = useContext(ConfigurationContext)

    return {
        darkMode,
        changeDarkMode,
        difficulty,
        changeDifficulty,
        digits,
        selectQtyDigits,
        maxAttempts,
        modifyQtyAttemps,
        language,
        changeLanguage
    }
}