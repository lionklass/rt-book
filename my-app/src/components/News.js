import React from 'react';
import PropTypes from 'prop-types';
import { Article } from './Article';

class News extends React.Component {
    renderNews = () => {
        const {data} = this.props
        let newsTemplate = null
        data.length 
        ?   newsTemplate = data.map((item) => {
                return <Article key = {item.id} data = {item}/>
            })
        :   newsTemplate = <p>К сожалению новостей нет</p>
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
  
  News.propTypes = {
    data: PropTypes.array.isRequired  // без комментариев
  }

  export { News }