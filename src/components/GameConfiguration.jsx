import { useTranslation } from "react-i18next"
import { lngs } from "../../i18n"
import { useConfiguration } from "../hooks/useConfiguration"
import { useGame } from "../hooks/useGame"

export const GameConfiguration = () => {

    const { darkMode, changeDarkMode, digits, selectQtyDigits, maxAttempts, modifyQtyAttemps, language, changeLanguage } = useConfiguration()
    const { resetGame } = useGame()
    const { t } = useTranslation()

    const handleChangeTheme = () => {
        changeDarkMode()
    }

    const handleChangeDifficulty = (e) => {
        console.log(e.target.value)
    }

    const handleChangeDigits = ({ target }) => {
        const quantity = target.value
        selectQtyDigits(quantity)
        resetGame()
    }

    const handleChangeAttemps = ({ target }) => {
        const quantity = target.value
        modifyQtyAttemps(quantity)
        resetGame()
    }

    const handleChangeLanguage = ({ target }) => {
        const language = target.value
        changeLanguage(language)
    }

    return (
        <div className="sm:col-span-6 flex flex-col gap-1 sm:gap-3">
            <div className="flex flex-row justify-between gap-3">
                <label htmlFor="difficulty">{t('configuration.difficulty')}:</label>
                <select id="difficulty" onChange={handleChangeDifficulty} value={'normal'} disabled
                    className="text-center rounded-md dark:text-black">
                    <option value="easy">{t('configuration.easy')}</option>
                    <option value="normal">{t('configuration.normal')}</option>
                    <option value="hard">{t('configuration.hard')}</option>
                </select>
            </div>
            <div className="flex flex-row justify-between gap-3">
                <label htmlFor="digits">{t('configuration.digits')}:</label>
                <select id="digits" onChange={handleChangeDigits} value={digits}
                    className="rounded-md dark:text-black">
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div className="flex flex-row justify-between gap-3">
                <label htmlFor="max-attemps">{t('configuration.max_attemps')}:</label>
                <select id="max-attemps" onChange={handleChangeAttemps} value={maxAttempts}
                    className="rounded-md dark:text-black">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div className="flex flex-row justify-between gap-3">
                <label htmlFor="select-theme">{t('configuration.theme')}</label>
                <select id="select-theme" onChange={handleChangeTheme} value={darkMode ? 'dark' : 'light'}
                    className="rounded-md dark:text-black">
                    <option value="dark">{t('configuration.dark')}</option>
                    <option value="light">{t('configuration.light')}</option>
                </select>
            </div>
            <div className="flex flex-row justify-between gap-3">
                <label htmlFor="language">{t('configuration.language')}:</label>
                <select id="language" value={language} onChange={handleChangeLanguage}
                    className="rounded-md dark:text-black">
                    {Object.keys(lngs).map((lng) => (
                        <option key={lng} value={lng}>
                            {lngs[lng].nativeName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
