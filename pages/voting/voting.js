// pages/voting/voting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        voteData: {
            title: "今晚吃什么",
            userName: "火星人",
            allPeople: 5,
            isRadio: false,
            data: [{
                "id": 1,
                "name": "番茄蛋汤",
                "user": [{
                    "nickname": "火星人1",
                    "headimg": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/4.jpg"
                }, {
                    "nickname": "火星人2",
                    "headimg": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/4.jpg"
                }, {
                    "nickname": "火星人3",
                    "headimg": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/4.jpg"
                }, {
                    "nickname": "火星人4",
                    "headimg": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/4.jpg"
                }, {
                    "nickname": "火星人5",
                    "headimg": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/4.jpg"
                }, {
                    "nickname": "火星人6",
                    "headimg": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/4.jpg"
                }]
            }, {
                "id": 2,
                "name": "番茄蛋汤",
                "user": []
            }, {
                "id": 3,
                "name": "番茄蛋汤",
                "user": []
            }, {
                "id": 4,
                "name": "番茄蛋汤",
                "user": [{
                    "nickname": "火星人1",
                    "headimg": "http://47.102.124.146/Demo/EmeraldSystemWeb/img/4.jpg"
                }]
            }]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var newData = [];
        var oldData = this.data.voteData;
        oldData.data.forEach(d => {
            d.user.forEach(u => {
                var ishave = true;
                newData.forEach(nd => {
                    if (nd.nickname == u.nickname) {
                        ishave = false;
                    }
                });
                if (ishave || newData.length == 0) {
                    newData.push(u);
                }
            });
            oldData.allPeople = newData.length;
            this.setData({
                voteData: oldData
            })
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    OnVote: function(event) {
        var oldData = this.data.voteData;
        var isRadio = oldData.isRadio;
        //选项id
        var id = event.currentTarget.dataset.postId;
        //当前用户数据
        var userInfo = wx.getStorageSync('userInfo');

        var isallhave = false;

        oldData.data.forEach(d => {
            d.user.forEach(u => {
                if (u.nickname == userInfo.nickName) {
                    isallhave = true;
                }
            });
        });
        oldData.data.forEach(d => {
            if (d.id == id) {
                var ishave = false;
                d.user.forEach(u => {
                    if (u.nickname == userInfo.nickName) {
                        ishave = true;
                    }
                });
                if (!ishave && ((isRadio && !isallhave) || (!isRadio))) {
                    d.user.push({
                        "nickname": userInfo.nickName,
                        "headimg": userInfo.avatarUrl
                    })
                } else {
                    var newData = [];
                    d.user.forEach(du => {
                        if (du.nickname != userInfo.nickName) {
                            newData.push(du);
                        }
                    });
                    d.user = newData;
                }
            }
        });
        this.setData({
            voteData: oldData
        })

    }
})