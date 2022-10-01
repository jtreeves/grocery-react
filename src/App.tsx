import GlobalStorage from './GlobalStorage'

function App(): JSX.Element {
    return (
        <GlobalStorage.Provider
            value={[{}, () => {}]}
        >
            Hello, world!
        </GlobalStorage.Provider>
    )
}

export default App
