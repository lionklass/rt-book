import React from 'react';
import PropTypes from 'prop-types';
import { Article } from './Article';

class News extends React.Component {
    state = {
        filteredNews: this.props.data       // создали состояние
    }
    static getDerivedStateFromProps (props, state) {
        let nextFilteredNews = [...props.data]      // было nextProps - переименовали
        nextFilteredNews.forEach ((item, index) => {
            if (item.fullText.toLowerCase ().indexOf ('pubs') !== -1) {
                item.fullText = 'СПАМ'
            }
        })
        return {
            filteredNews: nextFilteredNews
        }
    }
    renderNews = () => {
        const {filteredNews} = this.state   // используем состояние
        let newsTemplate = null
        filteredNews.length                 // везде data заменена на filteredNews
        ?   newsTemplate = filteredNews.map((item) => {
                return <Article key = {item.id} data = {item}/>
            })
        :   newsTemplate = <p>К сожалению новостей нет</p>
                return newsTemplate
        }
        
    render () {
        const {filteredNews} = this.state       // аналогично, используем состояние
        return (
            <div className = 'news'>
            {this.renderNews()}
            {
                filteredNews.length ? <strong className = {'news__count'}>Всего новостей: {filteredNews.length}</strong> : null
            }
            </div>
        )
    }
  }
  
  News.propTypes = {
    data: PropTypes.array.isRequired  // без комментариев
  }

  export { News }