//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    message:''
  },
  flag: false,
  inputHandler(e) {
    this.setData({
      message:e.detail.value
    })
  },
  sendHandler() {
    if (this.flag) {
      wx.sendSocketMessage({
        data: this.data.message,
        success: this.sendMessageSucc.bind(this)
      })
    }
  },
  sendMessageSucc(data) {
    console.log(data);
  },
  onLoad() {
    this.onConnectSocket();
    this.openSocket();
    this.onSocketMessageHandler();
  },
  onSocketMessageHandler() {
    wx.onSocketMessage((data)=>{
      console.log(data,"onSocketMessage")
    })
  },
  onConnectSocket() {
    wx.connectSocket({
      url: 'ws://127.0.0.1:3000',
      success:this.connectSocketSucc.bind(this)
    })
  },
  connectSocketSucc(data) {
    if(data.errMsg === "connectSocket:ok") {

    }
  },
  openSocket() {
    wx.onSocketOpen(()=>{
      this.flag=true;
    })
  },

 
})
 