const Comments = React.createClass ({
    render: () => {
        return (
            <div className = 'comments'>
                Новостей нет — комментировать нечего!
            </div>
        )
    }
})

const News = React.createClass ({
    render: () => {
        return (
            <div className = 'news'>
                К сожалению новостей нет.
            </div>
        )
    }
})

const App = React.createClass ({
    render: () => {
        return (
            <div className = 'app'>
                Всем привет, я компонент App! Я умею отображать новости
                <News/>
                <Comments/>
            </div>
        )
    }
})

ReactDOM.render(
    <App/> ,
    document.getElementById('root')
)