const App = () => {
    return (
    <React.Fragment>
    <News/>
    <Comments/>
    </React.Fragment>
    )
}

const News = () => {
    return <p>К сожалению никаких новостей нет</p>
}

const Comments = () => {
    return <p>К сожалению пока комментировать нечего</p>
}

/* class BigApp extends React.Component {
    render () {
        return (
            <React.Fragment>
            <h1>Я компонент BigApp</h1>
            <p className = 'red'>Компоненты можно вкладывать друг в друга</p>
            <App/>
            <News/>
            </React.Fragment>
        )
    }
} */

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)