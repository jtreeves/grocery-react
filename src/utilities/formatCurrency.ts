function formatCurrency(
    currency: number
): string {
    return (Math.round(currency * 100) / 100).toFixed(2)
}

export default formatCurrency
