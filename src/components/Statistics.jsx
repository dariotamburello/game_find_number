import { useTranslation } from "react-i18next"
import { formatDateToLocale } from "../helpers/date-times"
import { useStatistics } from "../hooks/useStatistics"
import { ButtonPopUp } from "./shared/ButtonPopUp"

export const Statistics = () => {
    const { totalPoints, totalGames, firstGameDate, restartStatistics } = useStatistics()
    const { t } = useTranslation()

    return (
        <div className="sm:col-span-6 flex flex-col gap-1 text-sm">
            <h2 className="text-base font-FigtreeBold">{t('statistics.your_statistics')}</h2>
            <div className="flex gap-5 justify-between">
                <p>{t('statistics.starting_from')}: </p>
                <p>{firstGameDate !== '' ? formatDateToLocale(firstGameDate) : ''}</p>
            </div>
            <div className="flex gap-5 justify-between">
                <p>{t('statistics.games_played')}: </p>
                <p>{totalGames}</p>
            </div>
            <div className="flex gap-5 justify-between">
                <p>{t('statistics.your_points')}: </p>
                <p>{totalPoints}</p>
            </div>
            <ButtonPopUp styles='text-xs'>{t('statistics.share_your_statistics')}</ButtonPopUp>
            <ButtonPopUp action={restartStatistics} styles='text-xs'>{t('statistics.restart_statistics')}</ButtonPopUp>
        </div>
    )
}
