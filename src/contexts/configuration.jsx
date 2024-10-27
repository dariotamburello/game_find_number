import { createContext, useEffect, useState } from "react"
import { saveConfiguration } from "../helpers/storageData"
import { useTranslation } from 'react-i18next'

const defaultConfig = {
    darkmode: 'true',
    difficulty: 'normal',
    digits: 5,
    maxAttemps: 10,
    language: null
}

const initialConfig = JSON.parse(window.localStorage.getItem('configuration')) || defaultConfig

export const ConfigurationContext = createContext()

// eslint-disable-next-line react/prop-types
export const ConfigurationProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(initialConfig.darkmode)
    const [difficulty, setDifficulty] = useState(initialConfig.difficulty)
    const [digits, setDigits] = useState(initialConfig.digits)
    const [maxAttempts, setMaxAttempts] = useState(initialConfig.maxAttemps)
    const { i18n } = useTranslation()
    const [language, setLanguage] = useState(initialConfig.language || i18n.resolvedLanguage)

    const changeDarkMode = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle("dark")
        saveConfiguration({ ...initialConfig, darkmode: !darkMode })
    }

    const changeDifficulty = () => {
        setDifficulty()
    }

    const selectQtyDigits = (number) => {
        if (number < 3 && number > 6) return
        setDigits(number)
        saveConfiguration({ ...initialConfig, digits: number })
    }

    const modifyQtyAttemps = (number) => {
        if (number < 10 && number > 20) return
        setMaxAttempts(number)
        saveConfiguration({ ...initialConfig, maxAttemps: number })
    }

    const changeLanguage = (lng) => {
        setLanguage(lng)
        i18n.changeLanguage(lng)
        saveConfiguration({ ...initialConfig, language: lng })
    }

    useEffect(() => {
        if (darkMode) document.body.classList.add("dark")
        else document.body.classList.remove("dark")
    }, [darkMode])

    return (
        <ConfigurationContext.Provider value={{
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
        }}>
            {children}
        </ConfigurationContext.Provider>
    )
}