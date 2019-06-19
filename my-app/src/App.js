import React from 'react';
import './App.css';
import { Add } from './components/Add';
import { News } from './components/News';


class App extends React.Component {
  state = {
      news: null,        // было newsData с импортом newsData.json
      isLoading: false    // статус для манипуляций "прелоадером" ("Загружаю..." в нашем случае)
  }
  static getDerivedStateFromProps (props, state) {
    let nextFilteredNews
    
    // смотрим в state.news (ранее смотрели в props)
    // и проверяем, чтобы не клонировать null
    // например, в момент первой отрисовки
    if (Array.isArray (state.news)) {
      nextFilteredNews = [...state.news]

      nextFilteredNews.forEach ((item, index) => {
        if (item.fullText.toLowerCase ().indexOf ('pubg') !== -1) {
          item.fullText = 'СПАМ'
        }
      })
      return {
        filteredNews: nextFilteredNews
      }
    }
    return null
  }
  componentDidMount () {
    this.setState ({isLoading: true})
    fetch ('http://localhost:3000/data/newsData.json')
    .then (response => {
      return response.json ()
    })
    .then (data => {
      setTimeout (() => {     // для лоадера
        this.setState ({
          isLoading: false,
          news: data
        })
      },1000)
    })
  }
  handleAddNews = (data) => {
      // сначала мы формируем массив, на основе
      // всего того, что уже было в новостях
      // и кладем это все в новый массив + 
      // новую новость кладем в начало массива
      const nextNews = [data, ...this.state.news]
      // затем обновляем новый массив новостей в this.state.news
      this.setState ({news: nextNews})
  }
  render () {
    const {news, isLoading} = this.state      // все необходимое взяли из state
      return (
          <React.Fragment>
          <Add onAddNews = {this.handleAddNews}/>
          <h3>Новости</h3>
          {/* считали новости из this.state */}
          {isLoading && <p>Загружаю</p>}
          {Array.isArray (news) && <News data = {news}/>}
          </React.Fragment>
      )
  }
}

export default App;
