import React from 'react';
import PropTypes from 'prop-types';

// input Component

class Add extends React.Component {
    state = {       // добавили начальное состояние
        name: '',
        text: '',
        fullText: '',   // добавлен fullText
        agree: false        // новое значение состояния - agree (булево)
    }
  
    onBtnClickHandler = (e) => {
        e.preventDefault()
        const {name, text, fullText} = this.state   // вытащили так же и fullText
        // alert (`${name}\n${text}`)      // \n = перенос строки
        // вызываем вместо alert
        // передаем name и text
        // full text у нас отсутствует :(
        this.props.onAddNews ({
            id: +new Date (),        // в id сохраняется количество миллисекунд прошедших с 1 января 1970 года в часовом поясе UTC
            author: name,
            text,
            fullText
        })
    }
    handleChange = (e) => {        // обработчик, в котором обновляем name и text по id элемента
        const {id, value} = e.currentTarget     
        this.setState ({[id]: value})
    }
    handleCheckboxChange = (e) => {        // обработчик кликов по чекбоксу
        this.setState({ agree: e.currentTarget.checked })      // чтобы установить true/false считываем свойство checked
    }
    validate = () => {
        const {name, text, agree} = this.state
        if (name.trim() && text.trim() && agree) {
            return true
        } 
            return false
    }
    render () {
        const {name, text, fullText} = this.state // вытащили значения из стейта. При validate const agree не востребована (удалена — eslint)
        return (
            // Форма шаблон
            // добавили value для name и для textarea
            <form className = 'add'>
            <input 
            id = 'name'
            type = 'text'
            onChange = {this.handleChange}
            className = 'add__author'
            placeholder = 'Ваше имя'
            value = {name}
            />
            <textarea 
            id = 'text'
            onChange = {this.handleChange}
            className = 'add__text'
            placeholder = 'Текст новости'
            value = {text}
            ></textarea>
            <textarea 
            id = 'fullText'
            onChange = {this.handleChange}
            className = 'add__text'
            placeholder = 'Текст новости подробно'
            value = {fullText}
            ></textarea>
            <label className = 'add_checkrule'>
            <input type = 'checkbox' onChange ={this.handleCheckboxChange}/>Я согласен с правилами
            </label>
            {/* кнопке добавили disabled равный (НЕ agree) 
            disabled = true будет означать, что кнопка выключена. 
            Кнопка должна быть выключена тогда, когда agree = false (то есть, чекбокс не отмечен), 
            значит мы делаем отрицание (НЕ) с помощью знака восклицания;
            */}
            <button 
            className = 'add__btn' 
            onClick = {this.onBtnClickHandler} 
            disabled = {!this.validate()}>
            Показать алерт
            </button>
            </form>
        )
    }
  }
  
  Add.propTypes = {
    onAddNews: PropTypes.func.isRequired            // func используется для проверки передачи function
  }

  export { Add }