const App = () => {
    return <p>Привет Я компонент App</p>
}

class BigApp extends React.Component {
    render () {
        return (
            <div>
            <h1>Привет Я компонент BigApp!</h1>
            <p className = 'red'>Компоненты можно вкладывать друг в друга</p>
            <App/>
            </div>
        )
    }
}

ReactDOM.render(
    <BigApp/>,
    document.getElementById('root')
)