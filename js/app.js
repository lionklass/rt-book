const myNews = [
    {
        id: 1,                      // добавили id
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        fullText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
      },
      {
        id: 2,
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        fullText: 'А евро 42!'
      },
      {
        id: 3,
        author: 'Max Frontend',
        text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
        fullText: 'А евро опять выше 70.'
      },
      {
        id: 4,
        author: 'Гость',
        text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
        fullText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
      },
      {
        id: 5,
        author: 'Пересмешник',
        text: 'Бесплатно? Бесплатный сыр — в мышеловке! ',
        fullText: 'Но иногда всё-таки везет!'
      }
]


class Article extends React.Component {
    state = {
        visible: false              // определили начальное состояние
    }
    handleReadMoreClick = (e) => {  // добавили метод
        e.preventDefault()
        this.setState ({visible: true})
    }
    render () {
        const {author, text, fullText} = this.props.data
        const {visible} = this.state            //вытащили visible из this.state
        return (
            <div className = 'article'>
            <p className = 'news__author'>{author}:</p>
            <p className = 'news__text'>{text}</p>
            { /* если не visible, то показывай;  добавили onClick */
            !visible &&  <a onClick = {this.handleReadMoreClick} href = '#' className = 'news-readmore'>Подробнее...</a>
            }
            {   /* если visible, то показывай */
            visible && <p className = 'news__full-text'>{fullText}</p>
            }
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      fullText: PropTypes.string.isRequired // добавили propTypes для bigText
    })
  }

class News extends React.Component {
    renderNews = () => {
        const {data} = this.props
        let newsTemplate = null
        {data.length 
        ?
            newsTemplate = data.map((item) => {
                return <Article key = {item.id} data = {item}/>
            })
        :   newsTemplate = <p>К сожалению новостей нет</p>}

        return newsTemplate
        }
        
    render () {
        const {data} = this.props
        return (
            <div className = 'news'>
            {this.renderNews()}
            {
                data.length ? <strong className = {'news__count'}>Всего новостей: {data.length}</strong> : null
            }
            </div>
        )
    }
}

// input Component

class TestInput extends React.Component {
    state = {
        myValue: ''
    }
     // используется e.currentTarget.value
    onChangeHandler = (e) => {
        this.setState ({myValue: e.currentTarget.value})
    }
    onBtnClickHandler = (e) => {
        e.preventDefault()
        alert (this.state.myValue)
    }
    render () {
        return (
            <React.Fragment>
            <input 
            className = 'test-input'
            onChange = {this.onChangeHandler} // метод onChange
            value = {this.state.myValue}
            placeholder = 'Введите значение'
            />
            <button onClick = {this.onBtnClickHandler}>Показать алерт</button>
            </React.Fragment>
        )
    }
}

const App = () => {
    return (
    <React.Fragment>
    <h3>Новости</h3>
    <TestInput/> {/* добавили вывод компонента TestInput */}
    <News data = {myNews}/>
    </React.Fragment>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)