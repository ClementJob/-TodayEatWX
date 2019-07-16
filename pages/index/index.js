//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World11',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        bnrUrl: [{
            "bnrid": 1,
            "url": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/xrhd/15.jpg",
            "title": "无敌滑嫩！港式虾仁滑蛋",
            "text": "做法简单又好吃。",
            "Likes": '6.2万',
            "Comments": '8',
            "Collection": '1.1万'
        }, {
            "bnrid": 2,
            "url": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/xrhd/15.jpg",
            "title": "无敌滑嫩！港式虾仁滑蛋",
            "text": "做法简单又好吃。",
            "Likes": '6.2万',
            "Comments": '8',
            "Collection": '1.1万'
        }, {
            "bnrid": 3,
            "url": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/xrhd/15.jpg",
            "title": "无敌滑嫩！港式虾仁滑蛋",
            "text": "做法简单又好吃。",
            "Likes": '6.2万',
            "Comments": '8',
            "Collection": '1.1万'
        }],
        messages: [{
            "text": "今天晚上吃什么呀！！！"
        }],
        re: [{
            "title": "无敌滑嫩！港式虾仁滑蛋",
            "url": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/xrhd/15.jpg"
        }, {
            "title": "无敌滑嫩！港式虾仁滑蛋",
            "url": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/xrhd/15.jpg"
        }, {
            "title": "无敌滑嫩！港式虾仁滑蛋",
            "url": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/xrhd/15.jpg"
        }, {
            "title": "无敌滑嫩！港式虾仁滑蛋",
            "url": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/xrhd/15.jpg"
        }]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
            wx.setStorage({
                key: "userInfo",
                data: app.globalData.userInfo
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
                wx.setStorage({
                    key: "userInfo",
                    data: res.userInfo
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                    wx.setStorage({
                        key: "userInfo",
                        data: res.userInfo
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
        wx.setStorage({
            key: "userInfo",
            data: e.detail.userInfo
        })
    },
    //#region  轮播图相关
    onSwiperTap: function(event) {
            var id = event.target.dataset.postId;
            wx.navigateTo({
                url: "/pages/details/details?id=" + id
            })
        },
        //#endregion
    onVote: function(event) {
        // var id = event.currentTarget.dataset.postId;
        // console.log(id);
        wx.navigateTo({
            url: "/pages/voting/voting?id=1"
        })
    }
})