
// 引入http模块
const http = require('http');

// 创建一个HTTP服务器实例
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 发送响应体
  res.end('Hello, World!');
});

// 指定服务器监听的端口
const port = 3000;

// 启动服务器，开始监听指定的端口
server.listen(port, () => {
    console.log(999)
})