const my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
]

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
    render: function () {
        const data = this.props.data
        const newsTemplate = data.map(function (item, index) {
            return (
                <div key = {index}>
                <p className = 'news__author'>{item.author}</p>
                <p className = 'news__text'>{item.text}</p>
                </div>
            )
        })
        return (
            <div className = 'news'>
                {newsTemplate}
                <strong className = {data.length > 0 ? 'news-is' : 'none'}>Всго новостей:{data.length}</strong>
            </div>
        )
    }
})

const App = React.createClass ({
    render: () => {
        return (
            <div className = 'app'>
                Всем привет, я компонент App! Я умею отображать новости
                <News data={my_news}/> {/* добавили свойство data */}
                <Comments/>
            </div>
        )
    }
})

ReactDOM.render(
    <App/> ,
    document.getElementById('root')
)