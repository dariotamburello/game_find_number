import { useTranslation } from "react-i18next"
import { GameConfiguration } from "./GameConfiguration"
import { ButtonPopUp } from "./shared/ButtonPopUp"
import { Statistics } from "./Statistics"

/* eslint-disable react/prop-types */
export const MenuPopUp = ({ menu, closeMenu }) => {
    const { t } = useTranslation()

    return (
        <aside data-active={menu}
            className='absolute w-full invisible data-[active=true]:visible scale-0 data-[active=true]:scale-100 transition-all'>
            <div className="flex flex-col gap-8 sm:gap-12 mt-10 mx-10 p-5 sm:p-10 border-2 rounded-lg transition-all
            bg-slate-50 dark:bg-slate-700 dark:border-slate-950">
                <div className="flex flex-col justify-between sm:grid sm:grid-cols-12 sm:justify-between gap-8 sm:items-center">
                    <Statistics></Statistics>
                    <GameConfiguration></GameConfiguration>
                </div>
                <div className="flex flex-row gap-3 justify-between text-sm">
                    <ButtonPopUp>{t('menu_buttons.send_challenge')}</ButtonPopUp>
                    <ButtonPopUp>{t('menu_buttons.send_us_your_comments')}</ButtonPopUp>
                    <ButtonPopUp action={closeMenu}>{t('menu_buttons.close')}</ButtonPopUp>
                </div>
            </div>


        </aside>
    )
}
