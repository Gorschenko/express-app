import express from 'express'

// import http from 'http'

// const host = '127.0.0.1'
// const port = 8000

// const server = http.createServer((req, res) => {
//     switch(req.method) {
//         case 'GET':
//             switch(req.url) {
//                 case '/hello':
//                     res.statusCode = 200
//                     res.setHeader('Content-Type', 'text/plain')
//                     res.end('Привет!')
//             }
//             break
//     }
// })

// server.listen(port, host, () => {
//     console.log(`Сервер запущен на ${host}:${port}`)
// })

const port = 8000
const app = express()

// app.all('/hello', (req, res, next) => {
//     console.log('All')
//     next()
// })

// const cb = (req, res, next) => {
//     console.log('CB')
//     next()
// }
// hel?lo - вторая l является необязательной
// hel+lo - неограниченное количество повторений l после +
// hel*lo - неограниченное количество любых символов после *
// he(la)?lo - можно группировать символы в группы
// первым параметров можно передавать regExp

// можно передавать массива кол-бэков
// app.route('/user')
//     .get('/hello', (req, res) => {
//         res.send('Привет GET!')
//     })
    // .post('/hello', (req, res) => {
    //     res.send('Привет POST!')
    // })

app.get('/hello', (req, res) => {
    // можно возвращать статус - res.status(201).send()
    // вместое send можно использовать метод json
    // res.download('/test.pdf')
    // res.redicrect(301, 'https://error404')
    // res.send({
    //     success: true,
    // })
    // res.append('Warning', 'code') - добавляет заголовок
    // res.type('application/json')
    // res.set('Content-Type', 'text/plain')
    // res.location()
    // res.links({ next: 'link_path' })
    // res.cookie('token', 'some token', {
    //     domain: '',
    //     path: '/',
    //     secure: true,
    //     expiress: 60000,
    // })
    // res.clearCookie('token')

    // res.send('Привет!')
    res.end()
})
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`)
})
