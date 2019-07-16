// pages/add/add.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        coverImg: "",
        defultMaterials: ["水", "中筋面粉", "鸡蛋", "盐", "酵母", "清水", "糖"],
        practices: [{
            "imgUrl": "",
            "description": ""
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
    /**
     * 添加封面图操作
     */
    onAddCoverImage: function() {

    },
    addMaList: function() {
        var oldData = this.data.practices;
        oldData.push({
            "imgUrl": "",
            "description": ""
        })
        this.setData({
            practices: oldData
        })
    }
})