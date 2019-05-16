const express = require('express') // запрос сервера express

const app = express()               // вызов сервера


app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(__dirname))

app.listen(app.get('port'), () => {
    console.log('Server started: http://localhost:' + app.get('port' + '/'))
})
//Минин вл
/* app.get('/', (req, res) => {
    res.end('Hello from NodeJS')
})

app.listen(3000, () => {             // указываем порт запуска
    console.log('Start Server on port 3000...')
})  */                  