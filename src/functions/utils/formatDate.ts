function formatDate(date: Date): string {
    const localDate = date.toLocaleDateString().split("/")
    const day = localDate[0]
    const month = localDate[1]
    const year = localDate[2]
    return `${year}-${month}-${day}`
}

export default formatDate