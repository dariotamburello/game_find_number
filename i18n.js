import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    title: 'Find the number',
                    description: 'Play this funny game and try to find the number',
                    game: {
                        loading: 'Loading',
                        you_win: 'You Win!',
                        you_loose: 'You loose',
                        points: 'points',
                        moves_left: 'Moves left',
                        hit_numbers_to_play: 'Hit numbers to Play'
                    },
                    menu_buttons: {
                        send_challenge: 'Send Challenge',
                        send_us_your_comments: 'Send us your comments',
                        close: 'Close'
                    },
                    statistics: {
                        your_statistics: 'Your Statistics',
                        starting_from: 'Starting from',
                        games_played: 'Games played',
                        your_points: 'Your points',
                        share_your_statistics: 'Share your statistics',
                        restart_statistics: 'Restart statistics'
                    },
                    configuration: {
                        difficulty: 'Difficulty',
                        easy: 'Easy',
                        normal: 'Normal',
                        hard: 'Hard',
                        digits: 'Digits',
                        max_attempts: 'Max attemps',
                        theme: 'Theme',
                        dark: 'Dark',
                        light: 'Light',
                        language: 'Language'
                    }
                }
            },
            es: {
                translation: {
                    title: 'Encuentra el Número',
                    description: 'Juega este divertido juego e intenta encontrar el número',
                    game: {
                        loading: 'Cargando',
                        you_win: '¡Ganaste!',
                        you_loose: 'Perdiste',
                        points: 'puntos',
                        moves_left: 'Intentos restantes',
                        hit_numbers_to_play: 'Presiona números para jugar'
                    },
                    menu_buttons: {
                        send_challenge: 'Enviar desafío',
                        send_us_your_comments: 'Envíanos tus comentarios',
                        close: 'Cerrar'
                    },
                    statistics: {
                        your_statistics: 'Tus estadísticas',
                        starting_from: 'Desde el',
                        games_played: 'Juegos jugados',
                        your_points: 'Tus puntos',
                        share_your_statistics: 'Comparte tus estadísticas',
                        restart_statistics: 'Reiniciar estadísticas'
                    },
                    configuration: {
                        difficulty: 'Dificultad',
                        easy: 'Fácil',
                        normal: 'Normal',
                        hard: 'Difícil',
                        digits: 'Dígitos',
                        max_attempts: 'Intentos máximos',
                        theme: 'Tema',
                        dark: 'Oscuro',
                        light: 'Claro',
                        language: 'Idioma'
                    }
                }
            },
            pt: {
                translation: {
                    title: 'Encontre o Número',
                    description: 'Jogue este jogo divertido e tente encontrar o número',
                    game: {
                        loading: 'Carregando',
                        you_win: 'Você venceu!',
                        you_loose: 'Você perdeu',
                        points: 'pontos',
                        moves_left: 'Tentativas restantes',
                        hit_numbers_to_play: 'Pressione números para jogar'
                    },
                    menu_buttons: {
                        send_challenge: 'Enviar Desafio',
                        send_us_your_comments: 'Envie-nos seus comentários',
                        close: 'Fechar'
                    },
                    statistics: {
                        your_statistics: 'Suas estatísticas',
                        starting_from: 'Desde',
                        games_played: 'Jogos jogados',
                        your_points: 'Seus pontos',
                        share_your_statistics: 'Compartilhe suas estatísticas',
                        restart_statistics: 'Reiniciar estatísticas'
                    },
                    configuration: {
                        difficulty: 'Dificuldade',
                        easy: 'Fácil',
                        normal: 'Normal',
                        hard: 'Difícil',
                        digits: 'Dígitos',
                        max_attempts: 'Máximas tentativas',
                        theme: 'Tema',
                        dark: 'Escuro',
                        light: 'Claro',
                        language: 'Idioma'
                    }
                }
            }
        }
    })
    .then(() => {
        // Llama a applyTranslations una vez que i18n está listo
        applyTranslations();
    })

export default i18n

export const lngs = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Español' },
    pt: { nativeName: 'Portugés' }
}

export const applyTranslations = () => {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n')
        if (key) el.textContent = i18n.t(key)
    })
}