const App = () => {
    return <p>Привет Я компонент App</p>
}

class BigApp extends React.Component {
    render () {
        return (
            <React.Fragment>
            <h1>Я компонент BigApp</h1>
            <p className = 'red'>Компоненты можно вкладывать друг в друга</p>
            <App/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <BigApp/>,
    document.getElementById('root')
)