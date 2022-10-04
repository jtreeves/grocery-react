function formatCurrency(
    currency: number
): string {
    const roundedCurrency: string = (Math.round(currency * 100) / 100).toFixed(2)
    const dollarSign: string = '$'
    const formattedCurrency: string = dollarSign + roundedCurrency

    return formattedCurrency
}

export default formatCurrency
