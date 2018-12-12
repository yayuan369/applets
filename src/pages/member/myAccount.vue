<template>
  <div>
    <!-- 用户信息 -->
    <div class='info'>
      <div class='avater'>
        <img v-if="avatarUrl != ''" :src="avatarUrl" alt="">
        <img v-if="avatarUrl == ''" src="/static/assets/avatar.png">
      </div>
      <div class='nickName'>
        <button class="login" v-if="nickName == ''" open-type="getUserInfo" @getuserinfo="onGotUserInfo">点击登录</button>
        <p>{{ nickName }}</p>
        <p style='color:#B4B4B4;font-size:14px'>{{ city }}</p>
      </div>
    </div>

    <i-cell-group>
      <i-cell title="用药人信息" is-link url="/pages/member/beneficiaryInfo">
        <i-icon slot='icon' type="like_fill" size="28" color="#1296db" />
      </i-cell>
      <i-cell title="地址管理" is-link url="/pages/address/address">
        <i-icon slot='icon' type="coordinates_fill" size="28" color="#1296db" />
      </i-cell>
      <i-cell title="我的优惠券" is-link url="/pages/member/coupon">
        <i-icon slot='icon' type="coupons" size="28" color="#1296db" />
      </i-cell>
    </i-cell-group>

    <i-cell-group>
      <i-cell title="会员信息" is-link url="/pages/member/vipInfo">
        <i-icon slot='icon' type="collection_fill" size="28" color="#1296db" />
      </i-cell>
      <i-cell title="我的二维码" is-link url="">
        <i-icon slot='icon' type="scan" size="28" color="#1296db" />
      </i-cell>
      <i-cell title="首页" is-link url="">
        <i-icon slot='icon' type="dynamic_fill" size="28" color="#1296db" />
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
import Toast from 'mp-weui/packages/toast'
export default {
  data () {
    return {
      avatarUrl: "",
      nickName: "",
      city: "",
    };
  },

  mounted() {
    this.forLogin()
  },

  methods: {
    onGotUserInfo: function(e) {
      console.log(e.mp.detail)
      this.forLogin()
    },
    // 授权登陆+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    forLogin() {
      var that = this
      wx.getSetting({
        success:function(res){
          that.login()
        }
      })
    },
    login() {
      var that = this
      // 查看是否授权
      wx.getSetting({
        success: function(res){
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                wx.login({
                  success: function(res) {
                    // 用户登录
                    wx.request({
                      url: process.env.Api+"/api/v1/miniapp/user/login",
                      data: {
                        code: res.code
                      },
                      method:'GET',
                      success: function(res) {
                        wx.setStorageSync("sessionid", res.header["Set-Cookie"].split(';')[0])
                        that.sessionKey = res.data.result.sessionKey
                        wx.setStorageSync("sessionKey", that.sessionKey)
                        that.unionid = res.data.result.unionid
                        that.getSetting()
                      },
                    })
                  }
                })
              }
            })
          }
        },
        fail: ()=>{
          Toast('授权失败')
        }
      })
    },

    getSetting(){
      var that = this
      wx.getSetting({
        success: function(res){
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                that.signature = res.signature
                that.rawData = res.rawData
                that.encryptedData = res.encryptedData
                that.iv = res.iv
                // 获取用户信息
                wx.request({
                  url: process.env.Api + "/api/v1/miniapp/user/info",
                  method:'GET',
                  data: {
                    sessionKey: wx.getStorageSync("sessionKey"),
                    signature: that.signature,
                    rawData: that.rawData,
                    encryptedData: that.encryptedData,
                    iv: that.iv
                  },
                  header: {
                    'content-type': 'application/json', 
                    'cookie': wx.getStorageSync("sessionid")
                  },
                  success: function(res) {
                    that.userInfo()
                  }
                })
              }
            })
          }else{
            Toast('用户还未授权过')
          }
        }
      })
    },

    userInfo() {
      var that = this
      wx.getUserInfo({
        success: function(res){
          that.avatarUrl = res.userInfo.avatarUrl
          that.nickName = res.userInfo.nickName
          that.city = res.userInfo.city
        }
      })
    },
    // 授权登陆结束+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  }
}

</script>
<style scoped>
.hhh {
  width:10%
}
  .info {
    height: 140px;
    line-height: 140px;
  }

  .avater {
    width: 80px;
    height: 80px;
    float: left;
    margin-top: 30px;
    margin-left: 4%;
    border-radius: 50%;
    overflow: hidden;
  }

  .avater img {
    width: 100%;
    height: 100%;
  }

  .nickName {
    font-size: 16px;
    width: 200px;
    line-height: 40px;
    height: 80px;
    margin-top: 30px;
    float: left;
    padding-left: 4%;
  }

  .login {
    margin-left:0%;
    margin-top:10%;
    background-color:#fff;
    border:none;
    text-align:left;
  }

  button::after{ border: none; }
</style>