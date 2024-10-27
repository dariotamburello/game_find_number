export const saveConfiguration = (configuration) => {
    window.localStorage.setItem('configuration', JSON.stringify(configuration))
}

export const saveStatistics = (statistics) => {
    window.localStorage.setItem('statistics', JSON.stringify(statistics))
}