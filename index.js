const WebSocket = require('ws');
//创建服务
const wss = new WebSocket.Server({ port: 3000 });
console.log(1);
//当用户连接的时候回触发connection
wss.on('connection', (client) => {
   //接收客户端消息
   client.on('message', (data) => {
       //遍历所有用户,将接收到的消息发送给所有的用户
       wss.clients.forEach((item) => {
           if (item.readyState === WebSocket.OPEN) {
               item.send(data);
          }
      });
  });
});