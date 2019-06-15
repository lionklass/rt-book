import React from 'react';              // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types';     // у Article это react и prop-types

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
            !visible &&  <a onClick = {this.handleReadMoreClick} href ='#readmore' className = 'news-readmore'>Подробнее...</a> /* # заменили на #readmore — eslint */
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
        id: PropTypes.number.isRequired,        // добавили id, это число, обязательно
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        fullText: PropTypes.string.isRequired // добавили propTypes для bigText
    })
  }

  export { Article }  //именованый экспорт