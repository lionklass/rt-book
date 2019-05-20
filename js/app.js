const myNews = [
    {
        id: 1,                      // добавили id
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
      },
      {
        id: 2,
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
      },
      {
        id: 3,
        author: 'Max Frontend',
        text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
      },
      {
        id: 4,
        author: 'Гость',
        text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
      },
      {
        id: 5,
        author: 'Пересмешник',
        text: 'Бесплатно? Бесплатный сыр — в мышеловке! '
      }
]


const App = () => {
    return (
    <React.Fragment>
    <News data = {myNews}/>         {/* добавили свойство data */}
    <Comments/>
    </React.Fragment>
    )
}

class News extends React.Component {
    render () {
        const data = this.props.data
        const newTemplate = data.map(function (item) {      {/* убираем index из аргумента */}
            return (
            <div key = {item.id}>               {/* используем id в качестве ключа */}
            <p className = 'news_author'>{item.author}:</p>
            <p className = 'news_text'>{item.text}</p>
            </div>
            )
        })
        return (
            <div className = 'news'>
            {newTemplate}
            <strong className = {data.length ? 'news-is' : 'none'}>Всего новостей: {data.length}</strong>
            </div>
        )
    }
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