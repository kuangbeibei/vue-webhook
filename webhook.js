const http = require('http');
const { features } = require('process');
const server = http.createServer((req, res) => {
    console.log('req.method: ', req.method);
    console.log('req.url: ', req.url);
    if (req.method === 'POST' && req.url === '/webhook') {
        console.log('yes!');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            ok: true
        }))
    } else {
        res.end('NOT FOUND~');
    }
})

server.listen(4000, () => {
    console.log('webhook服务在4000端口启动')
})