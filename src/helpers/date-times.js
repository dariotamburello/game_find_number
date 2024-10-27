export const formatDateToLocale = (isoDate) => {
    const date = new Date(isoDate)
    const locale = navigator.language || 'en-US'

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }

    return new Intl.DateTimeFormat(locale, options).format(date)
}