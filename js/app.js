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


class Article extends React.Component {
    render () {
        const {author, text} = this.props.data
        return (
            <div className = 'article'>
            <p className = 'news__author'>{author}:</p>
            <p className = 'news__text'>{text}</p>
            </div>
        )
    }
}

class News extends React.Component {
    render () {
        const {data} = this.props
        let newsTemplate
        {data.length 
        ?
            newsTemplate = data.map((item) => {
                return <Article key = {item.id} data = {item}/>
            })
        :   newsTemplate = <p>К сожалению новостей нет</p>}

        return (
            <div className = 'news'>
            {newsTemplate}
            {data.length ? <strong className = {'news__count'}>Всего новостей: {data.length}</strong> : null}
            </div>
        )
    }
}

const App = () => {
    return (
    <React.Fragment>
    <h3>Новости</h3>
    <News data = {myNews}/>
    </React.Fragment>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)