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

class Add extends React.Component {
    state = {       // добавили начальное состояние
        name: '',
        text: ''
    }

    onBtnClickHandler = (e) => {
        e.preventDefault()
    }
    handleNameChange = (e) => {        // обработчик, в котором обновляем name
        this.setState ({name: e.currentTarget.value})
    }
    handleTextChange = (e) => {        // обработчик, в котором обновляем text
        this.setState ({text: e.currentTarget.value})
    }
    render () {
        const {name, text} = this.state // вытащили значения из стейта
        return (
            // Форма шаблон
            // добавили value для name и для textarea
            <form className = 'add'>
            <input 
            type = 'text'
            onChange = {this.handleNameChange}
            className = 'add__author'
            placeholder = 'Ваше имя'
            value = {name}
            />
            <textarea 
            onChange = {this.handleTextChange}
            className = 'add__text'
            placeholder = 'Текст новости'
            value = {text}
            ></textarea>
            <label className = 'add_checkrule'>
            <input type = 'checkbox'/>Я согласен с правилами
            </label>
            <button className = 'add__btn' onClick = {this.onBtnClickHandler}>Показать алерт</button>
            </form>
        )
    }
}

const App = () => {
    return (
    <React.Fragment>
    <Add/>
    <h3>Новости</h3>
    <News data = {myNews}/>
    </React.Fragment>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)