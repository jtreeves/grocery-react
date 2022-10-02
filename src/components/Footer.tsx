function Footer(): JSX.Element {
    const now: Date = new Date()
    const year: number = now.getFullYear()

    return (
        <footer>
            © {year}
        </footer>
    )
}

export default Footer
