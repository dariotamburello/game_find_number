import { useState } from "react"
import { MenuClosed, MenuOpen, Reload } from "./shared/Icons"
import { useGame } from "../hooks/useGame"
import { MenuPopUp } from "./MenuPopUp"

import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t } = useTranslation()
    const [menu, setMenu] = useState(false)
    const { resetGame } = useGame()

    const handleButtonMenu = () => {
        setMenu(!menu)
    }

    return (
        <section className="relative">
            <header className="w-full pt-5 flex flex-row justify-between">
                <button onClick={() => resetGame()} className="ml-5 active:rotate-180 transition-all duration-[100ms]">
                    <Reload height={30} width={30}></Reload>
                </button>
                <h1 className="text-2xl uppercase font-bold text-center font-FigtreeBold">{t('title')}</h1>
                <button className="mr-5 hover:cursor-pointer transition-all" onClick={handleButtonMenu}>
                    {
                        menu
                            ? <MenuOpen height={30} width={30}></MenuOpen>
                            : <MenuClosed height={30} width={30}></MenuClosed>
                    }

                </button>
            </header>
            <MenuPopUp menu={menu} closeMenu={handleButtonMenu}></MenuPopUp>
        </section>
    )
}
